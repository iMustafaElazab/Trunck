interface BaseResponse<T> {
  status: number;
  message: string;
  data: T;
}
export default BaseResponse;
