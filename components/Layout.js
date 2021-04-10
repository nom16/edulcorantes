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
const { SubMenu } = Menu;
export default function ADLayoutAd(props) {
  return (
    <>
      <Layout hasSider>
        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
          }}
        >
          <div className="top-nav" />
          <Menu
            onClick={(item) => {
              props.OnClickItem(item);
            }}
            theme="light"
            mode="inline"
            defaultSelectedKeys={["4"]}
          >
            <Menu.Item key="1">Aditivos</Menu.Item>
            <Menu.Item key="2">Edulcorantes</Menu.Item>
            <Menu.Item key="4">EAI</Menu.Item>
            <Menu.Item key="5">Clasificación</Menu.Item>
            <SubMenu key="sub1" title="Calóricos">
              <SubMenu key="sub2" title="Glucosa">
                <Menu.Item key="6">Tom</Menu.Item>
                <Menu.Item key="7">Bill</Menu.Item>
                <Menu.Item key="8">Alex</Menu.Item>
              </SubMenu>
            </SubMenu>
            <SubMenu key="sub3" title="No calóricos">
              <SubMenu key="sub4" title="Sucralosa">
                <Menu.Item key="9">Composición</Menu.Item>
                <Menu.Item key="10">IDA</Menu.Item>
                <Menu.Item key="11">Efectos</Menu.Item>
              </SubMenu>
            </SubMenu>

            <Menu.Item key="12">nav 8</Menu.Item>
            <Menu.Item key="13">sdfsd</Menu.Item>
          </Menu>
        </Sider>
        <Layout className={styles.siteLayout} style={{ marginLeft: 200 }}>
          <div className="content-layout">
            <div
              className={styles.siteLayoutBackground}
              style={{ padding: 24, textAlign: "center" }}
            >
              {props.children}
            </div>
          </div>
        </Layout>
      </Layout>
    </>
  );
}
