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
  password_confirmation: string;
  customer_type_id: number;
}

export interface ForgetBody {
  email: string;
}
