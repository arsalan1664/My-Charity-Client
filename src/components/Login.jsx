import React, { useContext, useState } from "react";
import { useMutation } from "@apollo/client";
import { MyContext } from "../context/MyContext";
import { useNavigate } from "react-router-dom";
import { Button, Card, Form, Input } from "antd";
import { LockFilled } from "@ant-design/icons";
import { LOGIN_MUTATION } from "../util/query";
import { FormError } from "./FormError";
import { FormSuccess } from "./FormSuccess";
import { toast } from "sonner";

const Login = () => {
  const [login] = useMutation(LOGIN_MUTATION);
  const navigate = useNavigate();
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const { setIsLogin } = useContext(MyContext);

  const onFinish = async (values) => {
    try {
      const { data } = await login({
        variables: { username: values.username, password: values.password },
      });
      if (data.login.success == true) {
        console.log(data.login.message);
        localStorage.setItem("token", data?.login.token);
        setIsLogin(true);
        setSuccess(data.login.message);
        setTimeout(() => setSuccess(""), 3000);
        navigate("/admin");
        toast.success("Login Successfully");
      }
    } catch (error) {
      console.error(error);
      setError("Invalid Credential");
      setTimeout(() => setError(""), 3000);
      toast.error("Something Went Wrong");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        background: "#340B01",
      }}
    >
      <Card
        style={{ background: "#bed4c2" }}
        title={
          <div>
            <LockFilled /> Admin Login
          </div>
        }
      >
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button
              style={{ background: "#340B01" }}
              type="primary"
              htmlType="submit"
            >
              Login
            </Button>
            <Button
              style={{ marginLeft: "1rem" }}
              onClick={() => navigate("/")}
            >
              Back
            </Button>
          </Form.Item>
        </Form>
        <FormError message={error} />
        <FormSuccess message={success} />
      </Card>
    </div>
  );
};

export default Login;
