import axios, { AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";
import TokenHelper from "../helpers/Token.helpers";
import { toast } from "react-toastify";

axios.defaults.baseURL = "http://localhost:8001"; //  url

axios.interceptors.request.use(
  async (
    request: AxiosRequestConfig<any>
  ): Promise<InternalAxiosRequestConfig<any>> => {
    console.log({ request });
    // Ensure you're returning an InternalAxiosRequestConfig<any> or a Promise that resolves to it
    // If necessary, you might need to cast or adjust the request object to fit InternalAxiosRequestConfig

    request.headers = {
      ...request.headers,
      Authorization: `Bearer ${TokenHelper.get()}`,
    };
    return request as InternalAxiosRequestConfig<any>;
  }
);

axios.interceptors.response.use(null, (err) => {
  const expectedError =
    err.response && err.response.status >= 400 && err.response.status < 500;

  if (!expectedError) {
    toast.error("Unexpected error occured, please Try again");
  }

  return Promise.reject(err);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch,
};
