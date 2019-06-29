import React from "react";

import { Sidebar, Menu } from "semantic-ui-react";

import { Link } from "react-router-dom";

import "./SideBar.css";

export const SideBar = ({ visible, handleSideBarHide }) => {
  return (
    <Sidebar
      animation="scale down"
      direction="top"
      visible={visible}
      onHide={handleSideBarHide}
    >
      <Menu className="SideBar" fluid widths={4}>
        <Menu.Item className="MenuItem" active>
          Home
        </Menu.Item>
        <Menu.Item as={Link} to="./about" className="MenuItem">
          About
        </Menu.Item>
        <Menu.Item className="MenuItem">Resume</Menu.Item>
        <Menu.Item className="MenuItem">Contact</Menu.Item>
      </Menu>
    </Sidebar>
  );
};
