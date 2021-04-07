import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Aditives from "../components/Aditives";

let component = null;

export default function Home() {
  const [menuKey, setMenuKey] = useState("1");

  useEffect(() => {
    switch (menuKey) {
      case "1":
        component = <Aditives />;
        break;
      case "2":
        component = <h1>{menuKey}</h1>;
        break;
      case "3":
        component = <h1>{menuKey}</h1>;
        break;
      default:
        component = <h1>{menuKey}</h1>;
        break;
    }
  }, [menuKey]);

  return (
    <>
      <Layout
        OnClickItem={(item) => {
          setMenuKey(item.key);
        }}
      >
        {component}
      </Layout>
    </>
  );
}
