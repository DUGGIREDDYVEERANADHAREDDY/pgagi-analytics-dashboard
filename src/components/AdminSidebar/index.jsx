import { Text, Img } from "./..";
import React, { useState } from "react";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";
import { Link, useNavigate } from "react-router-dom";
import { BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill } from "react-icons/bs";

export default function AdminSidebar({ ...props }) {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  return (
    <Sidebar
      {...props}
      width="300px !important"
      collapsedWidth="80px !important"
      collapsed={collapsed}
      className={`${props.className} flex flex-col h-full pt-[30px] top-0 sm:pt-4 bg-white-a700 !sticky`}
      style={{
        height: "100vh",
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Img src="images/img_logo.png" alt="Logo Image" className="ml-10 h-[90px] w-[64%] object-contain" />

      <Menu
        menuItemStyles={{
          button: {
            padding: "20px 20px 20px 44px",
            gap: "25px",
            color: "#464154",
            fontWeight: 500,
            fontSize: "20px",
            [`&:hover, &.ps-active`]: { color: "#0bb5c9", fontWeight: "600 !important" },
          },
        }}
        rootStyles={{ ["&>ul"]: { gap: "0.25px" } }}
        className="mt-[52px] flex w-full flex-col self-stretch"
      >
        <Link to="/Admindashboard">
          <MenuItem icon={ <img src="/images/Dashboard.svg" alt="Admin Dashboard" className="w-6 h-6 mr-3" />}>
            Dashboard
          </MenuItem>
        </Link>
        <Link to="/Restaurants">
          <MenuItem icon={ <img src="/images/reataturtpic.svg" alt="Admin Dashboard" className="w-6 h-6 mr-3" />}>
           Restaurants
          </MenuItem>
        </Link>

      </Menu>

      {/* Footer Section */}
      {!collapsed && (
        <div
          className="absolute bottom-0 left-0 w-full px-[50px] py-[20px] flex flex-col items-start gap-[18px] bg-white">
          <Text size="body_paragraph_small" as="p" className="font-barlow text-[12px] font-normal leading-[15px] text-gray-500_02 font-semibold">
            <>{`SygnusTechlabs private limited`}<br /><span className="font-normal">© 2024 All Rights Reserved</span></>
          </Text>
          <Text size="body_paragraph" as="p" className="font-barlow text-[14px] font-normal text-gray-500_02">
            Made with <span style={{ color: "red" }}>❤️</span> by Sygnus
          </Text>
        </div>

      )}
    </Sidebar>
  );
}
