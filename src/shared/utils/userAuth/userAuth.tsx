import HttpMethodType from "../../enums/httpMethod";
import { IRequestSignup, IResponseSignup } from "../../interfaces/ISignup";
import { httpRequest } from "../httpRequest";

export async function createUser(
  signupData: IRequestSignup
): Promise<IResponseSignup> {
  return await httpRequest("v1/user/signup", HttpMethodType.POST, signupData);
}
