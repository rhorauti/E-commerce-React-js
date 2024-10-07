import HttpMethodType from "@src/core/enums/httpMethod";
import {
  IRequestLogin,
  IRequestSignup,
  IResponseEmailRecover,
  IResponseLogin,
  IResponseSignup,
} from "@src/core/interfaces/IAuthUser";
import { httpRequest } from "../httpRequest";

const apiURL = import.meta.env.VITE_API_URL;

export async function createUser(signupData: IRequestSignup): Promise<IResponseSignup> {
  return await httpRequest(`${apiURL}/user/signup`, HttpMethodType.POST, signupData);
}

export async function updateUserPassword(password: string): Promise<IResponseSignup> {
  return await httpRequest(`${apiURL}/user/new-password`, HttpMethodType.PUT, password);
}

export async function authenticateUser(loginData: IRequestLogin): Promise<IResponseLogin> {
  return await httpRequest(`${apiURL}/user/login`, HttpMethodType.POST, loginData);
}

export async function sendEmailRecover(email: string): Promise<IResponseEmailRecover> {
  return await httpRequest(`${apiURL}/user/email-recover`, HttpMethodType.POST, email);
}
