// src/api/axios.ts
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000", // ✅ 포트 8000 주의
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // 백엔드가 쿠키 인증 시 필요 (JWT만 쓰면 생략 가능)
});

export default api;
