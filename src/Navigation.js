import React from "react";
import "antd/dist/antd.css";
import "./styles.css";
import { Layout, Menu } from "antd";
import Logo from "./Logo.png";

const { Header } = Layout;

const Navigation = ({ setRoute }) => {
  const routeChange = (route) => {
    setRoute(route);
  };
  return (
    <Layout className="layout">
      <Header>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item onClick={() => routeChange("home")} key="0">
            <div>
              <img alt="mekVahan" src={Logo} height="50px" />
            </div>
          </Menu.Item>
          <Menu.Item key="1" onClick={() => routeChange("home")}>
            Home
          </Menu.Item>
          <Menu.Item onClick={() => routeChange("aboutus")} key="2">
            About Us
          </Menu.Item>
          <Menu.Item key="3">Pricing</Menu.Item>
          <Menu.Item key="4">Contact</Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
};

export default Navigation;
