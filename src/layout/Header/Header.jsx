import React from "react";
import { Search, LightMode, History, Notifications } from "@mui/icons-material";
import toggleIcon from "../../assets/Toggle.png";
import "./Header.scss";

// Custom Star Icon to match Figma design (sharper, cleaner star)
const CustomStarIcon = ({ sx }) => (
  <svg
    width={sx?.fontSize || 20}
    height={sx?.fontSize || 20}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2.5l2.4 7.4h7.8l-6.3 4.6 2.4 7.4L12 17.3l-6.3 4.6 2.4-7.4L1.8 9.9h7.8L12 2.5z"
      fill={sx?.color || "#000000"}
    />
  </svg>
);

// Custom Agent K Icon for side panel toggle
const AgentKIcon = ({ sx }) => (
  <svg
    width={sx?.fontSize || 20}
    height={sx?.fontSize || 20}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="8" r="3" fill={sx?.color || "#000000"} />
    <path
      d="M12 14c-4 0-6 2-6 4v2h12v-2c0-2-2-4-6-4z"
      fill={sx?.color || "#000000"}
    />
    <circle cx="18" cy="6" r="2" fill="#4f46e5" />
    <text x="18" y="9" fontSize="8" textAnchor="middle" fill="white">
      K
    </text>
  </svg>
);

const Header = ({ isCollapsed, onToggleSidebar, onToggleSidePanel }) => {
  return (
    <div className="dashboard-header">
      <div className="header-left">
        <div className="header-icon menu-toggle" onClick={onToggleSidebar}>
          <img src={toggleIcon} alt="Toggle Menu" width="20" height="20" />
        </div>
        <div className="header-icon">
          <CustomStarIcon sx={{ fontSize: 20, color: "#000000" }} />
        </div>
        <div className="breadcrumb">
          <span>Overview</span>
          <span>/</span>
          <span className="breadcrumb-active">Dashboard</span>
        </div>
      </div>

      <div className="header-right">
        <div className="search-box">
          <Search
            sx={{
              fontSize: 18,
              color: "rgba(0, 0, 0, 0.3)",
              flexShrink: 0,
            }}
          />
          <input
            type="text"
            placeholder="Search"
            style={{
              border: "none",
              outline: "none",
              background: "transparent",
              color: "rgba(0, 0, 0, 0.4)",
              fontFamily: "Inter",
              fontSize: "15px",
              flex: 1,
              fontFeatureSettings: '"ss01" on, "cv01" on',
              padding: "0 12px",
              fontWeight: "400",
            }}
          />
        </div>
        <div className="header-icons">
          <div className="header-icon">
            <LightMode sx={{ fontSize: 20, color: "#000000" }} />
          </div>
          <div className="header-icon">
            <History sx={{ fontSize: 20, color: "#000000" }} />
          </div>
          <div className="header-icon">
            <Notifications sx={{ fontSize: 20, color: "#000000" }} />
          </div>
          <div
            className="header-icon agent-k-toggle"
            onClick={onToggleSidePanel}
          >
            <img src={toggleIcon} alt="Toggle Menu" width="20" height="20" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
