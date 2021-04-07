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
const {SubMenu} = Menu
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
              Aditivos
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}></Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              Edulcorantes
            </Menu.Item>
            <Menu.Item key="4" icon={<BarChartOutlined />}>
              Blabla
            </Menu.Item>
            <Menu.Item key="5" icon={<CloudOutlined />}>
              Clasificación
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="Calóricos">
            <SubMenu key="sub2" icon={<UserOutlined />} title="Glucosa">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            </SubMenu>
            <SubMenu key="sub3" icon={<UserOutlined />} title="No calóricos">
            <SubMenu key="sub4" icon={<UserOutlined />} title="Sucralosa">
              <Menu.Item key="3">Composición</Menu.Item>
              <Menu.Item key="4">IDA</Menu.Item>
              <Menu.Item key="5">Efectos</Menu.Item>
            </SubMenu>
            </SubMenu>

            <Menu.Item key="8" icon={<ShopOutlined />}>
              nav 8
            </Menu.Item> 
            <Menu.Item key="9" icon={<ShopOutlined />}>sdfsd</Menu.Item>
          </Menu>
        </Sider>
        <Layout className={styles.siteLayout} style={{ marginLeft: 200 }}>
          <Header
            className={"PrimeraClase"}
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
