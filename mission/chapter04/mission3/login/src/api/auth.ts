// src/api/auth.ts
import api from "./axios";

export const signup = async (data: {
  name: string;
  email: string;
  password: string;
  bio?: string;
  avatar?: string;
}) => {
  const res = await api.post("/v1/auth/signup", data); // 
  return res.data;
};
