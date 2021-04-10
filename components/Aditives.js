import React, { useEffect } from "react";
import {
  PageHeader,
  Menu,
  Dropdown,
  Button,
  Tag,
  Typography,
  Row,
  List,
  Avatar,
} from "antd";
import styles from "../styles/Layout.module.css";

import { EllipsisOutlined } from "@ant-design/icons";

const { Paragraph } = Typography;

export default function Aditives(props) {
  const IconLink = ({ src, text }) => (
    <a className="example-link">
      <img className="example-link-icon" src={src} alt={text} />
      {text}
    </a>
  );

  const Content = ({ children, extraContent }) => {
    console.log("extraContent", extraContent);

    return (
      <div class="container-paragraph">
        <div className="text-paragraph">{children}</div>
        <div className="image-paragraph">{extraContent}</div>
      </div>
    );
  };

  const data = [
    {
      title: "Antioxidantes ",
    },
    {
      title: "Emulsionantes",
    },
    {
      title: "Enzimas de origen microbiológico utilizadas en elaboración",
    },
    {
      title: "Aromatizantes",
    },
    {
      title: "Colores alimentarios",
    },
    {
      title: "Sales inorgánicos y agentes inertes",
    },
    {
      title: "Edulcorantes",
    },
    {
      title: "Espesantes",
    },
    {
      title: "Pocos aditivos alimentarios diversos.",
    },
  ];

  return (
    <>
      <PageHeader
        title="Aditivos"
        className="site-page-header"
        subTitle="This is a subtitle"
        tags={<Tag color="blue">Running</Tag>}
        avatar={{
          src: "https://avatars1.githubusercontent.com/u/8186664?s=460&v=4",
        }}
      >
        <Content
          extraContent={
            <>
              <img
                src="https://www.ocu.org/-/media/ocu/images/home/alimentacion/seguridad%20alimentaria/aditivos_1600x900.jpg?rev=4b5fc922-7f87-4b0a-a0cf-f781545fd929&mw=480&hash=55D3CD084698439113A3088BA3C8265B"
                alt="content"
                width="100%"
              />
              <p className="text-image-paragraph">
                Aditivos en alimentos. (OCU, 2020)
              </p>
            </>
          }
        >
          <Paragraph className="justify-content text-container-description">
            Según el Codex Alimentarius, aditivo alimentario es cualquier
            sustancia que por sí misma no se consume normalmente como alimento,
            ni tampoco se usa como ingrediente básico en alimentos, tenga o no
            valor nutritivo y cuya adición al alimento en sus fases de
            producción, fabricación, elaboración, preparación, tratamiento,
            envasado, empaquetado, transporte o almacenamiento, resulte directa
            o indirectamente por sí o sus subproductos, un componente del
            alimento o bien afecte a sus características.(FAO, 2001)
          </Paragraph>
          <Paragraph className="justify-content list-container-paragraph">
            <span className="title-list-paragraph">Los grupos principales de aditivos son (CODEX, 1983):</span>
            <List
            className="list-component"
              itemLayout="horizontal"
              dataSource={data}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    title={<p className="name-list-paragraph" href="https://ant.design">{item.title}</p>}
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                  />
                </List.Item>
              )}
            />
          </Paragraph>
        </Content>
      </PageHeader>
    </>
  );
}
