import axios from "axios";

export class HttpClient {
  constructor(baseURL) {
    this.instance = axios.create({ baseURL });
    this.initializeResponseInterceptor();
  }

  initializeResponseInterceptor() {
    this.instance.interceptors.response.use(this.handleSuccess, this.handleError);
  }

  handleSuccess({ data }) {
    return data;
  }

  handleError(error) {
    return Promise.reject(error);
  }
}
