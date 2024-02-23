import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../context/MyContext";
import { useContext } from "react";
import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  LogoutOutlined,
  QqOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import styled from "styled-components";
import { toast } from "sonner";

const { Header, Sider } = Layout;
const Admin = ({ children }) => {
  /////////////////
  const menuItems = [
    {
      key: "1",
      icon: <PieChartOutlined />,
      label: "Dashboard",
      path: "/admin",
    },
    {
      key: "2",
      icon: <SettingOutlined />,
      label: "Setting",
      path: "/setting",
    },
  ];
  ////////////////////

  const [collapsed, setCollapsed] = useState(false);
  const { setIsLogin } = useContext(MyContext);
  const navigate = useNavigate();
  const handleLogout = async () => {
    localStorage.removeItem("token");
    setIsLogin(false);
    toast.success("Logout Successfully");
    navigate("/panel");
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <LogoTitle className="demo-logo-vertical">
          {!collapsed ? "Admin Panel" : <QqOutlined />}
        </LogoTitle>

        <Menu
          mode="vertical"
          selectedKeys={[location.pathname]}
          theme="dark"
          style={{ height: "100%", borderRight: 0 }}
        >
          {menuItems.map((item) => (
            <Menu.Item key={item.path} icon={item.icon}>
              <Link to={item.path}>{item.label}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <Button style={{ marginRight: "20px" }} onClick={handleLogout}>
            <LogoutOutlined />
            Logout
          </Button>
        </Header>
        <div style={{ margin: "24px" }}>{children}</div>
      </Layout>
    </Layout>
  );
};
export default Admin;

const LogoTitle = styled.h1`
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: start;
  padding-left: 25px;
  align-items: center;
  color: white;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
