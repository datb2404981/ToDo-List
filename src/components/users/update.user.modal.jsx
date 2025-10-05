import { message, notification, Modal, Input } from "antd";
import React, { useState } from "react";
import { updateUserAPI } from "../../services/api.service";

const UpdateUserModal = ({ open,user, onCancel, loadUser }) => {
  const id = user._id;
  const [fullName, setFullName] = useState(user?.fullName || "");
  const [phone, setPhone] = useState(user?.phone || "");

  const updateUser = async () => {
    try {
      await updateUserAPI(id,fullName, phone);
      notification.success({
        message: "Update User",
        description: "Cập nhật user thành công",
        placement: "topRight",
      });

      resetAndCloseModal();
      loadUser();
    } catch (err) {
      console.error("❌ Error:", err.response?.data || err.message);
      message.error(
        err.response?.data?.message || "❌ Lỗi khi cập nhật user, thử lại!"
      );
    }
  };

  const resetAndCloseModal = () => {
    onCancel();
    setFullName("");
    setPhone("");
  };

  return (
    <Modal
      title="Cập nhật User"
      open={open}
      onOk={updateUser}
      okText="Lưu"
      onCancel={resetAndCloseModal}
      maskClosable={true}
      closable={true}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <div>
          <label>Full Name:</label>
          <Input
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <label>Phone:</label>
          <Input
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>
    </Modal>
  );
};

export default UpdateUserModal;
