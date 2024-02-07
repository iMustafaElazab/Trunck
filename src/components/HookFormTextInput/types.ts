import type {TextInputProps} from '@eslam-elmeniawy/react-native-common-components';
import type {FieldPath, FieldValues, RegisterOptions} from 'react-hook-form';

export interface Props<T extends FieldValues> {
  name: FieldPath<T>;
  rules?: Omit<
    RegisterOptions<T, FieldPath<T>>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
  textInputProps?: Omit<TextInputProps, 'onBlur' | 'onChangeText' | 'value'>;
}
