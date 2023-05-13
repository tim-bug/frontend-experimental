// import axios from "axios";
// import { APIUrl } from "../constanta";

// export interface fatchApiInterface {
//   method: "GET" | "POST" | "PUT" | "DELETE";
//   url: string;
//   data?: any;
//   params?: any;
//   accessToken?: string;
//   headers?: any;
// }

// export const FetchApi = async (params: fatchApiInterface) => {
//   axios.defaults.withCredentials = true;
//   if (params.method === "POST" || params.method === "PUT") {
//     const data = await axios({
//       method: params.method,
//       url: APIUrl + params.url,
//       headers: params.headers
//         ? params.headers
//         : {
//             // Authorization: `Bearer ${params.accessToken}`,
//           },
//       data: {
//         data: params.data,
//       },
//     });
//     return data;
//   } else {
//     let pr = params.params;
//     if (params.params && params.params.filter) {
//       pr.filter = JSON.stringify(params.params.filter);
//     }
//     const data = await axios({
//       method: params.method,
//       url: APIUrl + params.url,
//       headers: params.headers
//         ? params.headers
//         : {
//             // Authorization: `Bearer ${params.accessToken}`,
//           },
//       params: pr,
//     });
//     return data;
//   }
// };
const A = () => {
  return null;
};

export default A;
