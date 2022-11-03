import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React from 'react';

import styles from './index.module.css'

const { Header, Content, Footer, Sider } = Layout;

const LayoutApp: React.FC = () => (
  <Layout>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className={styles.logo}></div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['table-list']}
        items={[UserOutlined,].map(
          (icon, index) => ({
            key: 'table-list',
            icon: React.createElement(icon),
            label: '产品列表',
          }),
        )}
      />
    </Sider>
    <Layout>
      <Header className={styles['site-layout-sub-header-background']} style={{ padding: 0 }} />
      <Content style={{ margin: '24px 16px 0' }}>
        <div className={styles['site-layout-background']} style={{ padding: 24, minHeight: '80vh'}}>
          content
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  </Layout>
);

export default LayoutApp;