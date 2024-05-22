import axios from "axios";
import HttpMethodType from "../enums/httpMethod";
import { IRequestSignup, IResponseSignup } from "../interfaces/ISignup";

export async function httpRequest(
  url: string,
  httpMethodType = HttpMethodType.GET,
  data: any = ""
): Promise<any> {
  await axios({
    url: url,
    method: httpMethodType,
    data: data,
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  })
    .then((data: any) => {
      localStorage.setItem("token", data.token);
    })
    .catch((error) => {
      console.log(error);
    });
}

export async function createUser(
  signupData: IRequestSignup
): Promise<IResponseSignup> {
  return await httpRequest("v1/user/signup", HttpMethodType.POST, signupData);
}
