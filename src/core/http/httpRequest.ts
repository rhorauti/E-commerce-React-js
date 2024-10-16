import axios from "axios";
import HttpMethodType from "../enums/httpMethod";

export async function httpRequest(
  url: string,
  httpMethodType = HttpMethodType.GET,
  data: any = ""
): Promise<any> {
  return await axios({
    url: url,
    method: httpMethodType,
    data: data,
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  }).then((response: any) => {
    if (response.token) localStorage.setItem("token", response.token);
    return response.data;
  });
}
