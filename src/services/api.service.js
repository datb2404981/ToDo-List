import { message } from "antd";
import axios from "./axios.customize"

const createUserAPI = async (fullName, email, password, phone) => {
  if (!fullName || !email || !password || !phone) {
    message.error("⚠️ Vui lòng nhập đầy đủ thông tin!");
    return;
  }
  await axios.post("/api/v1/user/register", {
    fullName,
    email,
    password,
    phone,
  });
};

const updateUserAPI = () => {
  // TODO
};

const loginUserAPI = async (username, password) => {
  return await axios.post("/api/v1/auth/login", { username, password });
};

const fetchAllUserAPI = () => {
  const token = localStorage.getItem("token");
  return axios.get("/api/v1/user", {
    headers: {
      Authorization: `Bearer ${token}`, // gắn token vào header
    },
  });
};

export { createUserAPI, updateUserAPI, loginUserAPI, fetchAllUserAPI };
