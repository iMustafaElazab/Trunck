import type {User} from '@src/core';

// TODO: Construct login response based on API.
interface LoginResponse {
  user?: User;
  token?: string;
}

export default LoginResponse;
