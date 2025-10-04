import React from "react";
import { Button, Checkbox, Form, Input, message, notification } from "antd";
import { loginUserAPI } from "../../services/api.service";
import { Navigate, useNavigate } from "react-router";

const LoginForm = () => {
  const navigate = useNavigate(); // hook của react-router
  
  const onFinish = async (values) => {

    try {
      console.log("✅ Success:", values);

      // gọi API
      const res = await loginUserAPI(values.username, values.password);

      // lấy data từ response
      const { access_token, user } = res.data.data;

      // lưu token vào localStorage
      localStorage.setItem("token", access_token);

      // hiện thông báo
      notification.success({
        message: "Login User",
        description: `Đăng nhập thành công. Xin chào ${user.fullName}`,
        placement: "topRight",
      });

      // redirect sang /users
      navigate("/users");
    } catch (err) {
      message.error(
        err.response?.data?.message || "❌ Lỗi khi đăng nhập user, thử lại!"
      );
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("❌ Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{
        maxWidth: 400,
        margin: "100px auto",
        padding: "40px 30px",
        border: "1px solid #f0f0f0",
        borderRadius: "12px",
        background: "#fff",
      }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
