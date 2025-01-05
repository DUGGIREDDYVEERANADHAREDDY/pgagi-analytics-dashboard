import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Login from "pages/Login";
import LoginOne from "pages/LoginOne";
import Dashboard from "pages/Dashboard";
import Menuitems from "pages/News";
import AddMenuitem from "pages/AddMenuitem";
import EditMenuItem from "pages/EditMenuItem";
import Categories from "pages/Categories";
import AddCategory from "pages/AddCategory";
import EditCategory from "pages/EditCategory";
import Chefs from "pages/Finance";
import AddChef from "pages/AddChef";
import EditChef from "pages/EditChef";
import Orders from "pages/Orders";
import Orderscalenderview from "pages/Orderscalenderview";
import Ordersnotavailable from "pages/Ordersnotavailable";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "dhiwise-dashboard", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "loginone",
      element: <LoginOne />,
    },
    {
      path: "dashboard",
      element: <Dashboard />,
    },
    {
      path: "menuitems",
      element: <Menuitems />,
    },
    {
      path: "addmenuitem",
      element: <AddMenuitem />,
    },
    {
      path: "editmenuitem",
      element: <EditMenuItem />,
    },
    {
      path: "categories",
      element: <Categories />,
    },
    {
      path: "addcategory",
      element: <AddCategory />,
    },
    {
      path: "editcategory",
      element: <EditCategory />,
    },
    {
      path: "chefs",
      element: <Chefs />,
    },
    {
      path: "addchef",
      element: <AddChef />,
    },
    {
      path: "editchef",
      element: <EditChef />,
    },
    {
      path: "orders",
      element: <Orders />,
    },
    {
      path: "orderscalenderview",
      element: <Orderscalenderview />,
    },
    {
      path: "ordersnotavailable",
      element: <Ordersnotavailable />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
