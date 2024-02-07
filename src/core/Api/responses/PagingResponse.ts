interface PagingResponse<T> {
  currentPage?: number;
  lastPage?: number;
  data?: T[];
}

export default PagingResponse;
