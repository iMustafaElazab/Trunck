import type {FieldValues} from 'react-hook-form';

export interface FormValues extends FieldValues {
  name: string;
  phone: string;
  email: string;
  password: string;
  passwordـconfrim: string;
}
