import React from "react";
import { NavLink } from "react-router-dom";
import { ArrowForwardIos, KeyboardArrowDown } from "@mui/icons-material";
import kpmgLogo from "../../assets/kpmg-logo.png";
import customerIcon from "../../assets/Customer.png";
import "./Sidenav.scss";

const Sidenav = ({ isCollapsed }) => {
  const navItems = [
    { name: "Dashboard", path: "/", type: "link" },
    { name: "Creative Studio", path: "/creative-studio", type: "link" },
    { name: "Brand Studio", type: "static" },
    { name: "Campaigns", type: "static" },
  ];

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      {/* Top Section - Logo and Navigation */}
      <div className="sidebar-top">
        {/* Logo Section */}
        <div className="logo-section">
          <img src={kpmgLogo} alt="KPMG Logo" className="logo-image" />
        </div>

        {/* Navigation Menu */}
        <div className="nav-menu">
          {navItems.map((item, index) =>
            item.type === "link" ? (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `nav-item ${isActive ? "active" : ""}`
                }
                title={isCollapsed ? item.name : ""}
              >
                <div className="nav-icon">
                  <img
                    src={customerIcon}
                    alt={item.name}
                    width="20"
                    height="20"
                  />
                </div>
                <div className="nav-text">{item.name}</div>
                <div className="nav-arrow">
                  <ArrowForwardIos
                    sx={{ fontSize: 16, color: "rgba(0, 0, 0, 0.2)" }}
                  />
                </div>
              </NavLink>
            ) : (
              <div
                key={index}
                className="nav-item"
                title={isCollapsed ? item.name : ""}
              >
                <div className="nav-icon">
                  <img
                    src={customerIcon}
                    alt={item.name}
                    width="20"
                    height="20"
                  />
                </div>
                <div className="nav-text">{item.name}</div>
                <div className="nav-arrow">
                  <ArrowForwardIos
                    sx={{ fontSize: 16, color: "rgba(0, 0, 0, 0.2)" }}
                  />
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* Bottom Section - User Profile */}
      <div className="user-profile">
        <div className="user-avatar">A</div>
        <div className="user-info">
          <div className="user-name">Arun</div>
          <div className="user-role">Admin</div>
        </div>
        <div className="profile-dropdown">
          <KeyboardArrowDown sx={{ fontSize: 16, color: "#151d48" }} />
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
