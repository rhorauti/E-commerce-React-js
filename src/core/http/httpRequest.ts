import axios from "axios";
import HttpMethodType from "../enums/httpMethod";

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
      if (data.token.length > 0) {
        localStorage.setItem("token", data.token);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
