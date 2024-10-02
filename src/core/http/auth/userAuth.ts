import HttpMethodType from "../../enums/httpMethod";
import {
  IRequestLogin,
  IRequestSignup,
  IResponseLogin,
  IResponseSignup,
} from "../../interfaces/IAuthUser";
import { httpRequest } from "../httpRequest";

const apiURL = import.meta.env.VITE_API_URL;

export async function createUser(signupData: IRequestSignup): Promise<IResponseSignup> {
  return await httpRequest(`${apiURL}/user/signup`, HttpMethodType.POST, signupData);
}

export async function updateUserPassword(password: string): Promise<IResponseSignup> {
  return await httpRequest(`${apiURL}/user/new-password`, HttpMethodType.PUT, password);
}

export async function authenticateUser(loginData: IRequestLogin): Promise<IResponseLogin> {
  return await httpRequest(`${apiURL}/user/login`, HttpMethodType.GET, loginData);
}
