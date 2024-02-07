import type {ServerError} from '@src/core';

export interface Props {
  error?: ServerError | null;
  isLoadingError?: boolean;
  data: string;
}
