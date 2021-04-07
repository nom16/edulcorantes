import React, { useEffect } from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  useEffect(() => {
    console.log("jajajajaja aqui estoy");
  }, []);

  return <Layout />;
}
