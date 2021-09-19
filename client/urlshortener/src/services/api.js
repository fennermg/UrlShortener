import axios from "axios";

const baseUrl = process.env.REACT_APP_BACKEND_URL

export const verifyTokenService = async (token) => {
  return axios({
    method: "get",
    url: `${baseUrl}/api/auth/me`,

    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
};


export const fethAPIService = async (data) => {
  return axios({
    method: "post",
    url: `${baseUrl}/api/auth`,
    data: {
      user: data.user,
      password: data.password,
    },
    headers: { "Content-Type": "application/json" },
  })
};


export const sendPostRequestService = async (longUrl) => {
  return axios({
    method: "post",
    url: `${baseUrl}/api/url/shorten`,
    data: {
      "longUrl": longUrl
    },
    headers: { "Content-Type": "application/json" },
  })
};


export const getLongUrlService = async (code) => {
  return axios({
    method: "get",
    url: `${baseUrl}/${code}`,
    headers: { "Content-Type": "application/json" },
  })
};



export const getTableService = async (token) => {
  return axios({
    method: "get",
    url: `${baseUrl}/api/toplist`,

    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
};