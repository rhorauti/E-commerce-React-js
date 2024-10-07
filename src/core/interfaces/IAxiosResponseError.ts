import { AxiosError, AxiosResponse } from "axios";

interface ICustomAxiosResponse extends AxiosResponse {
  data: {
    status: boolean;
    message: string;
  };
}

export interface IAxiosResponseError extends AxiosError {
  response: ICustomAxiosResponse;
}
