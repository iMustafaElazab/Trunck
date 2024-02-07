interface ApiRequest<T = any, R = any> {
  params?: Record<string, any>;
  body?: T;
  pathVar?: R;
}

export default ApiRequest;
