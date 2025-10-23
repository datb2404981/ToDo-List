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

const uploadFileAPI = (file, folder) => {
  const token = localStorage.getItem("token");
  let config = {
    headers: {
      "upload-type": folder,
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  };
  const bodyFormData = new FormData();
  bodyFormData.append("fileImg", file);
  return axios.post("/api/v1/file/upload", bodyFormData, config);
}

const updateUserAvatarAPI = (_id, fullName, phone,avatar) => {
  const token = localStorage.getItem("token");
  return axios.put(
    "/api/v1/user", // endpoint
    { _id:_id, fullName: fullName, phone: phone,avatar:avatar }, // body gửi đi
    {
      headers: {
        Authorization: `Bearer ${token}`, // header truyền riêng
      },
    }
  );
};

export {
  createUserAPI,
  updateUserAPI,
  loginUserAPI,
  fetchAllUserAPI,
  deleteUserAPI,
  uploadFileAPI,
  updateUserAvatarAPI,
};
