import React from "react";

import { useRoutes, A } from "hookrouter";
import routes from "../router";


import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;


const Home = () =>{
    const routeResult = useRoutes(routes);
        return (
        <> 
        {routeResult}

        <Layout className="layout">
    <Header>
      <div className="logo" />

      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="1"><A href="/register">Register</A> <br />
</Menu.Item>
        <Menu.Item key="2"><A href="/login">Login</A>
</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">Content</div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
        </>
        )
}


export default Home;
