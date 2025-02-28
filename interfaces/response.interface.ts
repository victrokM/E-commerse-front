
import { ResponseData } from '../types/response_data.type';

export interface Response<T> {
  data?: ResponseData<T> | null;
  code?: number;
  success?: boolean;
  message?: string;
  errors?: string[];
}
