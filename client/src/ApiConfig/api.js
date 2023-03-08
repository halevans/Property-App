import apiUrl from "./apiConfig";
import axios from "axios";

export const registerUser = (registerDetails) => {
  return axios.post(`${apiUrl}/users/tokens/sign_up`, registerDetails);
}

export const loginUser = (loginDetails) => {
  return axios.post(`${apiUrl}/users/tokens/sign_in`, loginDetails);
}

export const logoutUser = (token) => {
  return axios.post(`${apiUrl}/users/tokens/revoke`, null , {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}

export const checkTokenValidity = (token) => {
  return axios.get(`${apiUrl}/users/tokens/info`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
});
}

export const getProperties = (token) => {
  return axios.get(`${apiUrl}/houses`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

