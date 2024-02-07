// TODO: Construct server error response based on API.
interface ServerErrorResponseErrors {
  message?: string[];
}

interface ServerErrorResponse {
  error?: string;
  errors?: string | ServerErrorResponseErrors;
  message?: string;
}

export default ServerErrorResponse;
