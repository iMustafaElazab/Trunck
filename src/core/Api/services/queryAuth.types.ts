// TODO: Construct login body based on API.
export interface LoginBody {
  username: string;
  password: string;
}

export interface RegisterBody {
  name: string;
  email: string;
  phone: string;
  password: string;
  image: string;
}

export interface ForgetBody {
  email: string;
}

export interface UpdateBody {
  name: string;
  email: string;
  phone: string;
  password: string;
  image: string;
}
