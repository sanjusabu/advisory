import AppHeader from "./components/common/header";
import AppFooter from "./components/common/footer";
import AppHome from "./views/home";
import "./App.css";
import "antd/dist/antd.css";
import { Layout } from "antd";
import React from "react";
const { Header, Content, Footer } = Layout;
const Home = () => {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>
      <Content>
        <AppHome />
      </Content>
      <Footer>
        <AppFooter />
      </Footer>
    </Layout>
  );
};
export default Home;
