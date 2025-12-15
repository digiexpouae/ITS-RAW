import axios from "axios";
import { getToken } from "@clerk/nextjs"; // or pass a function

// base url
// adding url method url concatenate with base url
const axiosInstance = axios.create({
  baseURL: "https://1iv07ov9ub.execute-api.me-central-1.amazonaws.com",

  timeout: 600000,
  headers: {
    Accept: "application/json",
      "Content-Type": "application/json"
  },
});
// set token on each request 
// token will pass in header on each request

// Token utility component/hook



const setAuthToken = async (token) => {
  try {
  
const token = await getToken?.(); 
    if (token) {
      axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
    } else {
      delete axiosInstance.defaults.headers.common.Authorization;
    }
  } catch (error) {
    console.error("Error setting auth token:", error);
  }
};


class HttpError extends Error {
  constructor(message, status, errors) {
    super(message);
    this.status = status;
    this.errors = errors;
  }
}

class NetworkError extends Error {
  constructor(message) {
    super(message);
  }
}

class SocketError extends Error {
  constructor(message) {
    super(message);
  }
}

const checkUnAuth = async (error) => {
  if (error === "Unauthenticated") {
    store.dispatch(LogoutUser());
  }
};

const handleRequestError = (error) => {
  if (axios.isAxiosError(error)) {
    if (!error.response) {
      if (error.code === "ECONNABORTED") {
        throw new SocketError(
          "Socket timeout: The request took too long to complete."
        );
      }
      throw new NetworkError("No Internet Connection");
    }
    const status = error.response.status;
    const responseData = error.response.data;
    if (responseData.error) {
      checkUnAuth(responseData.error.messages[0]);
      throw new HttpError(responseData.error.messages[0], status);
    } else if (responseData.errors || responseData.message) {
      checkUnAuth(responseData.message);
      throw new HttpError(responseData.message, status, responseData.errors);
    } else {
      throw new HttpError(error.response.statusText, status);
    }
  }
  throw error;
};
const addApiPrefix = (url) => `/api/${url}`;

const request = async ({
  method = "GET",
  url,
  data = null,
  config = {},
  includeToken = true,
  isFile = false,
  token
}) => {
 
  try{

let requestData = data;
console.log("data"+requestData)
console.log("token"+ token)


// if (isFile) {
//   const formData = new FormData();
//   if (data) {
//     Object.entries(data).forEach(([key, value]) => {
//       // Handle File correctly
//       if (value instanceof File) {
//         formData.append(key, value, value.name);
//       } else if (Array.isArray(value)) {
//         // optional: handle arrays
//         value.forEach(v => formData.append(`${key}[]`, v));
//       } else if (value !== undefined && value !== null) {
//         formData.append(key, value);
//       }
//     });
//   }
//   requestData = formData;
// }


    const response = await axiosInstance({
      method,
      url: addApiPrefix(url),
      data: requestData,
    
       headers: {
    ...(config.headers || {}),
        ...(token ? { Authorization: `Bearer ${token}` }:{}),
      },
    });
        console.log("response"+ response)
    return response.data;
  }
  catch(error){
    return (error)
  }
};

const api = {
  get: ({ url, config = {},token }) => request({ method: "GET", url, config,token }),
  post: ({ url, data = null, config = {},token }) => request({ method: "POST", url, data, config ,token}),
  patch: ({ url, data = null, config = {} ,token}) => request({ method: "PATCH", url, data, config,token }),
  put: ({ url, data = null, config = {} ,token}) => request({ method: "PUT", url, data, config,token }),
  delete: ({ url, config = {} ,token}) => request({ method: "DELETE", url, config,token }),
};

export default api;
