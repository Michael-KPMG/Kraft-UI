import React from "react";
import {
  BarChart,
  ArrowForwardIos,
  KeyboardArrowDown,
} from "@mui/icons-material";
import kpmgLogo from "../../assets/kpmg-logo.png";
import overviewIcon from "../../assets/Overview.png";
import segmentIcon from "../../assets/Segment.png";
import customerIcon from "../../assets/Customer.png";
import "./Sidenav.scss";

const Sidenav = ({ isCollapsed }) => {
  const navItems = [
    { name: "Overview", icon: "image", iconSrc: overviewIcon, active: true },
    { name: "Campaigns", icon: "image", iconSrc: segmentIcon, active: false },
    { name: "Customers", icon: "image", iconSrc: customerIcon, active: false },
    { name: "Reports", icon: "image", iconSrc: customerIcon, active: false },
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
          {navItems.map((item, index) => {
            return (
              <div
                key={index}
                className={`nav-item ${item.active ? "active" : ""}`}
                title={isCollapsed ? item.name : ""}
              >
                <div className="nav-icon">
                  {item.icon === "image" ? (
                    <img
                      src={item.iconSrc}
                      alt={item.name}
                      width="20"
                      height="20"
                    />
                  ) : (
                    <item.icon sx={{ fontSize: 20, color: "#000000" }} />
                  )}
                </div>
                <div className="nav-text">{item.name}</div>
                {!item.active && (
                  <div className="nav-arrow">
                    <ArrowForwardIos
                      sx={{ fontSize: 16, color: "rgba(0, 0, 0, 0.2)" }}
                    />
                  </div>
                )}
              </div>
            );
          })}
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
