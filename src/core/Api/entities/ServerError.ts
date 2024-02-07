import type {ServerErrorResponse} from '@src/core';
import type {AxiosError} from 'axios';

interface ServerError extends AxiosError<ServerErrorResponse> {
  date?: Date;
  status?: number;
  data?: ServerErrorResponse;
  errorMessage?: string;
}

export default ServerError;
