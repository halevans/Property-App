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
  });
}

export const getUserInfo = (user_id, token) => {
  return axios.get(`${apiUrl}/users/${user_id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}

export const getOffers = (token, house_id) => {
  return axios.get(`${apiUrl}/house_offers/${house_id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

export const newOffer = (token, offer_info) => {
  return axios.post(`${apiUrl}/offers`, offer_info, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

export const deleteProperty = (token, house_id) => {
  return axios.delete(`${apiUrl}/houses/${house_id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}

export const newProperty = (token, property_info) => {
  return axios.post(`${apiUrl}/houses`, property_info, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}
