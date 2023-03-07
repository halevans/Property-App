import apiUrl from "./apiConfig";
import axios from "axios";

export const registerUser = (registerDetails) => {
  return axios.post(`${apiUrl}/users/tokens/sign_up`, registerDetails);
}