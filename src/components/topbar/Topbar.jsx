import React from "react";
import "./topbar.css";
import {Button} from 'antd';
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { Layout } from "antd";


const {Header} = Layout;
export default function Topbar() {
  const handleClick = (e)=>{
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.reload();
  }
  return (
    <Header style={{background:'white'}}>
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Meloline</span>
        </div>
        <div className="topRight">
          <Button  type="primary" onClick={handleClick}>Logout</Button>
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
    </Header>
  );
}
