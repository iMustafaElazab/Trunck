import type {ApiRequest, LoginBody, User, LogoutResponse} from '@src/core';
import {randomIntFromInterval} from '@src/utils';
import {user} from './data';

const getLogMessage = (message: string) => `## fakers::fakerAuth:: ${message}`;

const fakerAuth = {
  login: (request: ApiRequest<LoginBody>): Promise<User> => {
    console.info(getLogMessage('login'), request);

    return new Promise(res =>
      setTimeout(
        () => {
          res(user);
        },
        randomIntFromInterval(100, 1000),
      ),
    );
  },
  logout: (): Promise<LogoutResponse> => {
    console.info(getLogMessage('logout'));

    return new Promise(res =>
      setTimeout(
        () => {
          res({message: 'Logout successfully'});
        },
        randomIntFromInterval(100, 1000),
      ),
    );
  },
};

export default fakerAuth;
