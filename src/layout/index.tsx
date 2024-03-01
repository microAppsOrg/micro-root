import { useNavigate } from 'react-router-dom';
import { Layout, Menu, MenuProps } from 'antd';

import { APP_MENUS } from '../app.config';

const { Header, Content, Sider } = Layout;

const Slider = () => {
  const navigate = useNavigate();

  const onMenuClick: MenuProps['onClick'] = ({ key }) => {
    navigate(key);
  }

  return (
    <Sider>
      <Menu 
        items={APP_MENUS}
        theme='light'
        style={{ height: '100%', overflow: 'auto' }}
        mode='inline'
        onClick={onMenuClick}
      />
    </Sider>
  )
}


export const RootLayout = () => {

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Layout style={{ width: '100%', height: '100%' }}>
        <Header style={{ background: '#fff' }} >header</Header>
        <Layout style={{ flex: 1 }}>
          <Slider />
          <Content>
            <div id="single-spa-application:@micro-app/app1"></div>
            <div id="single-spa-application:@micro-app/app2"></div>
            <div id="single-spa-application:@micro-app/app3"></div>
          </Content>
        </Layout>
      </Layout>
    </div>
  )
}