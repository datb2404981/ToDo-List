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

const updateUserAPI = (_id, fullName, phone) => {
  const token = localStorage.getItem("token");
  return axios.put(
    "/api/v1/user", // endpoint
    { _id, fullName, phone }, // body gửi đi
    {
      headers: {
        Authorization: `Bearer ${token}`, // header truyền riêng
      },
    }
  );
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

const deleteUserAPI = (id) => {
  const token = localStorage.getItem("token");
  return axios.delete(`/api/v1/user/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export {
  createUserAPI,
  updateUserAPI,
  loginUserAPI,
  fetchAllUserAPI,
  deleteUserAPI,
};
