import React, { useState } from "react";
import { Input, Button } from "antd";
import { createUserAPI } from "../../services/api.service";


const UserForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleClickBtn = async () => {

    await createUserAPI(fullName, email, password, phone);
    // reset input
    setFullName("");
    setEmail("");
    setPassword("");
    setPhone("");
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          padding: "10px",
          fontSize: "15px",
          maxWidth: "400px",
        }}
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
        <Button
          type="primary"
          onClick={handleClickBtn}
          style={{ marginTop: "10px" }}
        >
          Create User
        </Button>
      </div>
    </>
  );
};

export default UserForm;
