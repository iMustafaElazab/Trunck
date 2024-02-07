import axios from 'axios';
import {default as Config} from 'react-native-config';
import type {ServerError, ServerErrorResponse} from '@src/core';
import {translate, getCurrentLocale} from '@src/core/I18n';
import {setErrorDialogMessage, store} from '@src/store';
import ConsoleColors from './ConsoleColors';
import skip401Urls from './skip401Urls';
import type {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

const getLogMessage = (message: string) => `## HttpClient:: ${message}`;

const addHeaders = (config: InternalAxiosRequestConfig<any>) => {
  config.headers.Accept = 'application/json';
  config.headers['Content-Type'] = 'application/json';
  config.headers['Accept-Language'] = getCurrentLocale();
  config.headers['cache-control'] = 'no-cache';
  const token = store.getState().user?.user?.apiToken;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
};

const getLogMethodColor = (method?: string) => {
  let methodColor: string | undefined;

  switch (method) {
    case 'GET':
      methodColor = ConsoleColors.GET;
      break;
    case 'HEAD':
      methodColor = ConsoleColors.HEAD;
      break;

    case 'POST':
      methodColor = ConsoleColors.POST;
      break;

    case 'PUT':
      methodColor = ConsoleColors.PUT;
      break;

    case 'PATCH':
      methodColor = ConsoleColors.PATCH;
      break;

    case 'DELETE':
      methodColor = ConsoleColors.DELETE;
      break;

    case 'OPTIONS':
      methodColor = ConsoleColors.OPTIONS;
      break;

    default:
      methodColor = undefined;
      break;
  }

  return methodColor;
};

const shouldSkip401 = (error: AxiosError<ServerErrorResponse>) => {
  console.info(getLogMessage('shouldSkip401'), error);
  const responseUrl = error.request?.responseURL;
  console.info(getLogMessage('responseUrl'), responseUrl);

  const isSkip401Url: boolean =
    responseUrl &&
    typeof responseUrl === 'string' &&
    skip401Urls.some(url => responseUrl.indexOf(url) > -1);

  console.info(getLogMessage('isSkip401Url'), isSkip401Url);
  return isSkip401Url;
};

const handle401Error = (error: AxiosError<ServerErrorResponse>) => {
  console.info(getLogMessage('handle401Error'), error);
  const status = error.response?.status;
  console.info(getLogMessage('status'), status);

  if (status === 401 && !shouldSkip401(error)) {
    store.dispatch(setErrorDialogMessage(translate('session_expired')));
  }
};

const getErrorMessage = (error: AxiosError<ServerErrorResponse>) => {
  // TODO: Construct error message base on "ServerErrorResponse" constructed from API.
  let errorMessage: string = translate('unknown_error');

  if (error.response?.data?.error) {
    errorMessage = error.response?.data?.error;
  } else if (
    error.response?.data?.errors &&
    typeof error.response.data.errors === 'string'
  ) {
    errorMessage = error.response?.data?.errors;
  } else if (
    error.response?.data?.errors &&
    typeof error.response.data.errors === 'object' &&
    error.response.data.errors.message &&
    error.response.data.errors.message.length
  ) {
    errorMessage = error.response?.data?.errors?.message?.join('\n');
  } else if (error.response?.data?.message) {
    errorMessage = error.response?.data?.message;
  } else if (error.message) {
    errorMessage = error.message;
  }

  return errorMessage;
};

const handleAxiosError = (error: AxiosError<ServerErrorResponse>) => {
  console.info(getLogMessage('handleAxiosError'), error);
  handle401Error(error);

  const severError: ServerError = {
    ...error,
    date: new Date(),
    status: error.response?.status,
    data: error.response?.data,
    errorMessage: getErrorMessage(error),
  };

  return Promise.reject(severError);
};

const requestFulfilledInterceptor = (
  config: InternalAxiosRequestConfig<any>,
) => {
  addHeaders(config);
  const method = config.method?.toUpperCase();
  const methodColor = getLogMethodColor(method);

  console.info(
    getLogMessage(`🚀 Sending %c${method}%c Request to %c${config.url}`),
    `color: ${methodColor}`,
    'color: undefined',
    `color: ${ConsoleColors.URL}`,
    config,
  );

  return config;
};

const requestRejectedInterceptor = (error: any) => {
  console.error(
    getLogMessage(
      `🚫 Error Sending Request to %c${error.response?.config?.url}`,
    ),
    `color: ${ConsoleColors.URL}`,
    error,
  );

  return Promise.reject(error);
};

const responseFulfilledInterceptor = (response: AxiosResponse<any, any>) => {
  console.info(
    getLogMessage(`✅ Got Response from %c${response.config.url}`),
    `color: ${ConsoleColors.URL}`,
    response,
  );

  return response;
};

const responseRejectedInterceptor = (error: any) => {
  console.error(
    getLogMessage(`❌ Got Error from %c${error.response?.config?.url}`),
    `color: ${ConsoleColors.URL}`,
    error,
  );

  if (axios.isAxiosError<ServerErrorResponse>(error)) {
    return handleAxiosError(error);
  }

  const severError: ServerError = {
    ...error,
    errorMessage: translate('unknown_error'),
  };

  return Promise.reject(severError);
};

const httpClient = axios.create({
  baseURL: Config.API_URL,
  timeout: 60 * 1 * 1000,
  timeoutErrorMessage: translate('network_error'),
});

httpClient.interceptors.request.use(
  requestFulfilledInterceptor,
  requestRejectedInterceptor,
);

httpClient.interceptors.response.use(
  responseFulfilledInterceptor,
  responseRejectedInterceptor,
);

export default httpClient;
