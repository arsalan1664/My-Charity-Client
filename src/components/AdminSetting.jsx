import React, { useState } from "react";
import { FormSuccess } from "./FormSuccess";
import { FormError } from "./FormError";
import { Button, Form, Input } from "antd";
import { useMutation } from "@apollo/client";
import { Content } from "antd/es/layout/layout";
import { theme } from "antd";
import styled from "styled-components";
import { EDITUSER_MUTATION } from "../util/query";

function AdminSetting() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Content
      style={{
        margin: "24px 16px",
        padding: 24,
        minHeight: "80vh",
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
      }}
    >
      <LoginForm />
    </Content>
  );
}

export default AdminSetting;

const LoginForm = () => {
  const [form] = Form.useForm();
  const [editUser] = useMutation(EDITUSER_MUTATION);

  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const onFinish = async (values) => {
    try {
      const token = localStorage.getItem("token");
      const { data } = await editUser({
        variables: {
          token,
          newUsername: values.username,
          newPassword: values.password,
        },
      });

      if (data.editUser.success == true) {
        setSuccess(data.editUser.message);
        setTimeout(() => {
          setSuccess(null);
        }, 3000);
      }
      if (data.editUser.success == false) {
        setError(data.editUser.message);
        setTimeout(() => {
          setError(null);
        }, 3000);
      }
    } catch (error) {
      setError(error);
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  };

  return (
    <StyledForm
      form={form}
      onFinish={onFinish}
      initialValues={{ remember: false }}
    >
      <h2>Change Your Credential</h2>
      <Form.Item
        name="username"
        rules={[
          { required: true, message: "Please enter your username!" },
          { min: 5, message: "Username must be at least 5 characters!" },
        ]}
      >
        <Input placeholder="Username" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          { required: true, message: "Please enter your password!" },
          { min: 5, message: "Password must be at least 5 characters!" },
        ]}
      >
        <Input.Password placeholder="Password" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      <FormSuccess message={success} />
      <FormError message={error} />
    </StyledForm>
  );
};

const StyledForm = styled(Form)`
  max-width: 300px;
`;
