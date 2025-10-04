import React, { useState } from "react";
import { Input, Button, Modal, notification, message } from "antd";
import { createUserAPI } from "../../services/api.service";


const UserForm = (props) => {

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { loadUser } = props;



  const createUser = async () => {

    try {
      await createUserAPI(fullName, email, password, phone);
      notification.success({
        message: "Create User",
        description: "Tạo user thành công",
        placement: "topRight",
      });

      // reset input
      resetAndCloseModal();

      //update data
      loadUser();
    } catch (err) {
      console.error("❌ Error:", err.response?.data || err.message);
      message.error(
        err.response?.data?.message || "❌ Lỗi khi tạo user, thử lại!"
      );
    }
  }

  const resetAndCloseModal = () => {
    setIsModalOpen(false)
    setFullName("");
    setEmail("");
    setPassword("");
    setPhone("");
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          padding: "10px",
          fontSize: "15px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3>Table User</h3>
          <Button
            type="primary"
            onClick={() => setIsModalOpen(true)}
            style={{ marginTop: "10px" }}
          >
            Create User
          </Button>
        </div>
        <Modal
          title="Basic Modal"
          closable={{ "aria-label": "Custom Close Button" }}
          open={isModalOpen}
          onOk={createUser}
          onCancel={resetAndCloseModal}
          maskClosable={false}
        >
          <div>
            <label>Full Name:</label>
            <Input
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div>
            <label>Email:</label>
            <Input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Password:</label>
            <Input.Password
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
        </Modal>
      </div>
    </>
  );
};

export default UserForm;
