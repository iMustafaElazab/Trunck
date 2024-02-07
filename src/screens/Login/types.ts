import type {FieldValues} from 'react-hook-form';

export interface FormValues extends FieldValues {
  username: string;
  password: string;
}
