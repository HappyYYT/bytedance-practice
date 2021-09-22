// import logo from './logo.svg';
import { Layout, Menu } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  PieChartOutlined,
} from "@ant-design/icons";

import "./App.css";
import "antd/dist/antd.css";

const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function App() {
  return (
    <div className="App">
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          <Slider />
        </Sider>
        <Layout>
          <Content>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 800 }}
            >
              <Main />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
}

function Slider() {
  return (
    <Menu
      theme={"dark"}
      style={{ width: 200 }}
      defaultSelectedKeys={["1"]}
      // defaultOpenKeys={["sub1"]}
      mode="inline"
    >
      <Menu.Item key="0" style={{ marginBottom: "40px" }}>
        <a id="logo" href="/">
          <img
            alt="logo"
            src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            width="32"
          />
          Ant Design
        </a>
      </Menu.Item>
      <Menu.Item key="1" icon={<AppstoreOutlined />}>
        Overview
      </Menu.Item>
      <SubMenu key="sub2" icon={<PieChartOutlined />} title="Analytics">
        <Menu.Item key="2">Option 1</Menu.Item>
        <Menu.Item key="3">Option 2</Menu.Item>
      </SubMenu>
      <SubMenu key="sub3" icon={<MailOutlined />} title="Message">
        <Menu.Item key="4">Option 1</Menu.Item>
        <Menu.Item key="5">Option 2</Menu.Item>
      </SubMenu>
      <SubMenu key="sub4" icon={<SettingOutlined />} title="Setting">
        <Menu.Item key="6">Option 1</Menu.Item>
        <Menu.Item key="7">Option 2</Menu.Item>
      </SubMenu>
    </Menu>
  );
}

function Main() {
  return (
    <>
      {/* <h1 style={{ textAlign: "left" }}>Overview</h1> */}
      <div className="home-card-logo">
        <img
          alt="Ant Design"
          src="https://gw.alipayobjects.com/zos/basement_prod/80e7d303-aa05-4c2d-94e9-2255ab5cea6c.svg"
          className="home-banner-mini"
        />

        <svg viewBox="0 0 64 64" className="home-card-logo-icon" style={{marginTop: "-320px"}}>
          <g
            transform="translate(16, 16)"
            opacity="1"
            frame="0"
            cubic="0.25,0.1,0.25,1"
          >
            <g transform="matrix(1, 0, 0, 1, 0, 0)">
              <g transform="rotate(0, 16, 16)">
                <svg viewBox="0 0 32 32">
                  <image
                    href="https://gw.alipayobjects.com/zos/basement_prod/95736b64-de90-4fcd-bae9-a827091a247d.svg"
                    height="16"
                    width="16"
                  ></image>
                </svg>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </>
  );
}

export default App;
