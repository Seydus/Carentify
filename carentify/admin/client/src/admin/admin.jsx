import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";

import CreateCar from "./pages/createcar";
import CarInventory from "./pages/carinventory";
import CustomerInventory from "./pages/customerinventory";
import OrderInventory from "./pages/orderinventory";
import Overview from "./pages/overview";

function Admin() {
  const { collapseSidebar } = useProSidebar();
  const [selectedPage, setSelectedPage] = useState("overview");

  const handleMenuItemClick = (page) => {
    setSelectedPage(page);
    // collapseSidebar();
  };

  const renderSelectedPage = () => {
    switch (selectedPage) {
      case "overview":
        return (
          <h1
            style={{ color: "black", marginLeft: "5rem", marginRight: "5rem" }}
          >
            <Overview />
          </h1>
        );
      case "orders":
        return (
          <h1
            style={{ color: "black", marginLeft: "5rem", marginRight: "5rem" }}
          >
            <OrderInventory />
          </h1>
        );
      case "customers":
        return (
          <h1
            style={{ color: "black", marginLeft: "5rem", marginRight: "5rem" }}
          >
            <CustomerInventory />
          </h1>
        );
      case "cars":
        return (
          <h1
            style={{ color: "black", marginLeft: "5rem", marginRight: "5rem" }}
          >
            <CarInventory />
          </h1>
        );
      default:
        return null;
    }
  };

  return (
    <div id="app" style={{ height: "100vh", display: "flex", width: "100%" }}>
      <Sidebar style={{ height: "100vh", flex: "0 0 auto" }}>
        <Menu>
          <MenuItem
            // icon={<MenuOutlinedIcon />}
            // onClick={() => handleMenuItemClick("overview")}
            style={{ textAlign: "center" }}
          >
            {" "}
            <h2>Admin</h2>
          </MenuItem>
          <MenuItem
            icon={<SummarizeOutlinedIcon />}
            onClick={() => handleMenuItemClick("overview")}
          >
            Overview
          </MenuItem>
          <MenuItem
            icon={<PeopleOutlinedIcon />}
            onClick={() => handleMenuItemClick("orders")}
          >
            Orders
          </MenuItem>
          <MenuItem
            icon={<PeopleOutlinedIcon />}
            onClick={() => handleMenuItemClick("customers")}
          >
            Customers
          </MenuItem>
          <MenuItem
            icon={<DirectionsCarFilledOutlinedIcon />}
            onClick={() => handleMenuItemClick("cars")}
          >
            Cars
          </MenuItem>
        </Menu>
      </Sidebar>
      <main style={{ flex: "1", overflow: "auto", margin: 0, padding: 0 }}>
        {renderSelectedPage()}
      </main>
    </div>
  );
}

export default Admin;
