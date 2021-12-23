import {
  TeamOutlined,
  HomeOutlined,
  DollarCircleOutlined,
  FileOutlined,
  DesktopOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

import { Layout,Menu } from "antd";
import { useState } from 'react';
import { Link } from "react-router-dom";



export default function Sidebar() {
  const [collapsed,setCollapsed] = useState(false);
    const  onCollapse = () => {
        console.log(collapsed);
        setCollapsed(!collapsed);
      };
      const {  Sider } = Layout;
const {SubMenu} = Menu
  return (
    <div>
      {/* <Sider>
        <div className>
          <h1>Meloline</h1>
        </div>
        
      </Sider> */}
       <Sider style={{minHeight:'100vh',height:'100%'}} collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" style={{marginTop:'100px'}} mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          Analytics
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          Sales
        </Menu.Item>
        <SubMenu key="sub1" icon={<TeamOutlined />} title="Users">
              <Menu.Item key="4"><Link to="/users">Users</Link></Menu.Item>
              <Menu.Item key="5"><Link to="/users/new">new User</Link></Menu.Item>
         </SubMenu>
         <SubMenu key="sub2" icon={<TeamOutlined />} title="Items">
            <Menu.Item key="6"> <Link to="/items">Items</Link></Menu.Item>
             <Menu.Item key="7"> <Link to="/items/new">new Item</Link></Menu.Item>
         </SubMenu>
         <SubMenu key="sub3" icon={<TeamOutlined />} title="Pharmacies">
              <Menu.Item key="8"><Link to="/pharmacies">Pharmacies</Link></Menu.Item>
              <Menu.Item key="9"><Link to='/pharmacies/new'>new Pharmacy</Link></Menu.Item>
         </SubMenu>
        
      </Menu>

      </Sider>
    </div>
  );
}
