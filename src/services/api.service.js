import { message, notification } from "antd";
import axios from "./axios.customize"

const createUserAPI = async (fullName, email, password, phone) => {
  if (!fullName || !email || !password || !phone) {
    message.error("⚠️ Vui lòng nhập đầy đủ thông tin!");
    return;
  }

  try {
    const res = await axios.post("/api/v1/user/register", {
      fullName,
      email,
      password,
      phone,
    });

    console.log("✅ User created:", res.data);

    notification.success({
      message: "Create User",
      description: "Tạo user thành công",
      placement: "topRight",
    });
  } catch (err) {
    console.error("❌ Error:", err.response?.data || err.message);
    message.error(
      err.response?.data?.message || "❌ Lỗi khi tạo user, thử lại!"
    );
  }
};

const updateUserAPI = () => {
  // TODO
};

export { createUserAPI, updateUserAPI };
