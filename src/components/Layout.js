import Sidebar from './sidebar/Sidebar';
import Topbar from './topbar/Topbar';
import { Layout } from 'antd';
import Navigation from '../routes/Navigation';

const { Header, Content, Footer } = Layout;

const Design = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout className="site-layout">
        <Topbar />
        <Content style={{ margin: '10px 16px' }}>
          <Navigation />
        </Content>
        <Footer style={{ textAlign: 'center' }}>Melloline ©2021</Footer>
      </Layout>
    </Layout>
  );
};

export default Design;
