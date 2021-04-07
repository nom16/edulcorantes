import React, { useEffect } from "react";
import styles from "../styles/Layout.module.css";
import { Layout, Menu } from "antd";
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;

export default function ADLayoutAd(props) {
  return (
    <>
      <Layout hasSider >
        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
          }}
        >
          <div className="logo" />
          <Menu theme="light" mode="inline" defaultSelectedKeys={["4"]}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              Calculadora de consumo de edulcorantes
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}></Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              Chuleta
            </Menu.Item>
            <Menu.Item key="4" icon={<BarChartOutlined />}>
              Chuleta
            </Menu.Item>
            <Menu.Item key="5" icon={<CloudOutlined />}>
              nav 5
            </Menu.Item>
            <Menu.Item key="6" icon={<AppstoreOutlined />}>
              nav 6
            </Menu.Item>
            <Menu.Item key="7" icon={<TeamOutlined />}>
              nav 7
            </Menu.Item>
            <Menu.Item key="8" icon={<ShopOutlined />}>
              nav 8
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className={styles.siteLayout} style={{ marginLeft: 200 }}>
          <Header
            className={styles.siteLayoutBackground}
            style={{ padding: 0 }}
          />
          <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
            <div
              className={styles.siteLayoutBackground}
              style={{ padding: 24, textAlign: "center" }}
            >
              {props.children}
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}
