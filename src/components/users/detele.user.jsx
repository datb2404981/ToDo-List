import React from "react";
import { DeleteOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import { message, notification, Popconfirm } from "antd";
import { deleteUserAPI } from "../../services/api.service";

const DeleteUser = ({ user, loadUser }) => {
  const deleteUser = async () => {
    try {
      await deleteUserAPI(user._id); // ✅ Dùng _id
      notification.success({
        message: "Delete User",
        description: "Xóa user thành công",
        placement: "topRight",
      });
      loadUser(); // ✅ Load lại dữ liệu
    } catch (err) {
      console.error("❌ Error:", err.response?.data || err.message);
      message.error(
        err.response?.data?.message || "❌ Lỗi khi xóa user, thử lại!"
      );
    }
  };

  return (
    <Popconfirm
      title="Xóa người dùng"
      description="Bạn chắc chắn muốn xóa user này?"
      okText="Xóa"
      cancelText="Hủy"
      icon={<QuestionCircleOutlined style={{ color: "red" }} />}
      onConfirm={deleteUser}
    >
      <DeleteOutlined style={{ color: "red", cursor: "pointer" }} />
    </Popconfirm>
  );
};

export default DeleteUser;
