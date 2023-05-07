import { API_URL } from "@env";
import * as Device from "expo-device";

const fetchHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const fetchLogin = async (email, password) => {
  const response = await fetch(`${API_URL}api/company/login`, {
    method: "POST",
    headers: fetchHeaders,
    body: JSON.stringify({
      email: email,
      password: password,
      // device: Device.modelId,
      device: 'MiIphone12', // Device temporal
    }),
  });

  return await response.json();
};

export const fetchRegister = async (data) => {
  const response = await fetch(`${API_URL}api/company/register`, {
    method: "POST",
    headers: fetchHeaders,
    body: JSON.stringify({
      name: data.name,
      ruc: data.ruc,
      email: data.email,
      password: data.password,
      password_confirmation: data.password_confirmation,
      status: true,
      // device: Device.modelId,
      device: 'MiIphone12', // Device temporal
    }),
  });

  return await response.json();
};
