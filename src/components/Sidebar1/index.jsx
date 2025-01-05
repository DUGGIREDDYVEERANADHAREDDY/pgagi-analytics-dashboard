import React, { useState } from "react";
import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";
import { Link, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Heading } from "components";

export default function ResponsiveSidebar({ className, darkMode, ...props }) {
  const [collapsed, setCollapsed] = React.useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const navigate = useNavigate();
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const sidebarLinks = [
    { path: "/dashboard", label: "Dashboard", icon: "img_home_blue_gray_800.svg" },
    { path: "/weather", label: "Weather", icon: "cloud-solid.svg" },
    { path: "/latest-News", label: "News", icon: "newspaper-solid.svg" },
    { path: "/chefs", label: "Finance", icon: "coins-solid.svg" },
  ];

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      {isMobile && !isSidebarOpen && (
        <div className="fixed top-0 left-0 z-50 flex flex-col items-start p-4">
          <img
            src="images/img_logo.png"
            alt="Logo"
            className="w-22 h-16 mb-2"
          />
          <button
            className="bg-cyan-700 text-white p-2 rounded-md"
            onClick={toggleSidebar}
          >
            ☰
          </button>
        </div>
      )}
      {!isMobile && (
        <Sidebar
          {...props}
          width="250px !important"
          collapsedWidth="60px !important"
          collapsed={collapsed}
          className={`flex flex-col h-full ${
            darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
          } ${className}`}
          style={{ height: "100vh", display: "flex", padding: 0 }}
        >
          <Heading class="text-center mt-8">
          <h3 className="text-2xl font-semibold mb-4">Analytics-Dashboard</h3>
</Heading>


          
          <Menu
            menuItemStyles={{
              button: {
                padding: "20px 20px 20px 44px",
                gap: "25px",
                color: darkMode ? "#E5E7EB" : "#464154",
                fontWeight: 500,
                fontSize: "25px",
                "&:hover, &.ps-active": {
                  color: "#0bb5c9",
                  fontWeight: 600,
                },
              },
            }}
            className="mt-[52px] flex w-full flex-col"
          >
            {sidebarLinks.map((link, index) => (
              <Link key={index} to={link.path}>
                <MenuItem
                  icon={
                    <img
                      src={`images/${link.icon}`}
                      alt={`${link.label} Icon`}
                      className="h-[24px] w-[24px]"
                    />
                  }
                >
                  {link.label}
                </MenuItem>
              </Link>
            ))}
          </Menu>
        </Sidebar>
      )}
      {isMobile && (
        <div
          className={`fixed top-0 left-0 h-full transition-transform duration-300 ${
            darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
          } ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
          style={{
            width: "250px",
            boxShadow: "2px 0px 5px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div
            className={`p-4 flex justify-between items-center ${
              darkMode ? "bg-cyan-500" : "bg-cyan-700"
            } text-white`}
          >
            <h3 className="font-bold text-lg">Menu</h3>
            <button onClick={toggleSidebar} className="text-white text-xl">
              ✖
            </button>
          </div>
          <Menu
            menuItemStyles={{
              button: {
                padding: "10px 20px",
                color: darkMode ? "#E5E7EB" : "#464154",
                fontWeight: 500,
                fontSize: "16px",
                "&:hover, &.ps-active": {
                  color: "#0bb5c9",
                  fontWeight: 600,
                },
              },
            }}
            className="flex flex-col"
          >
            {sidebarLinks.map((link, index) => (
              <Link key={index} to={link.path}>
                <MenuItem onClick={toggleSidebar}>{link.label}</MenuItem>
              </Link>
            ))}
          </Menu>
        </div>
      )}
    </div>
  );
}
