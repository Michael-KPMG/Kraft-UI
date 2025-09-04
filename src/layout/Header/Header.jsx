import React from "react";
import { useLocation } from "react-router-dom";
import { Search, LightMode, History, Notifications } from "@mui/icons-material";
import toggleIcon from "../../assets/Toggle.png";
import "./Header.scss";

const CustomStarIcon = ({ sx }) => (
  <svg
    width={sx?.fontSize || 20}
    height={sx?.fontSize || 20}
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M12 2.5l2.4 7.4h7.8l-6.3 4.6 2.4 7.4L12 17.3l-6.3 4.6 2.4-7.4L1.8 9.9h7.8L12 2.5z"
      fill={sx?.color || "#000000"}
    />
  </svg>
);

const Header = ({ isCollapsed, onToggleSidebar, onToggleSidePanel }) => {
  const { pathname } = useLocation();

  const isCreativeStudio = pathname.includes("/creative-studio");
  const isDashboard = pathname === "/" || pathname === "/dashboard";

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
          {isCreativeStudio ? (
            <span className="breadcrumb-active">Creative studio</span>
          ) : isDashboard ? (
            <>
              <span>Overview</span>
              <span>/</span>
              <span className="breadcrumb-active">Dashboard</span>
            </>
          ) : (
            <>
              <span>Overview</span>
              <span>/</span>
              <span className="breadcrumb-active">
                {pathname.replace("/", "")}
              </span>
            </>
          )}
        </div>
      </div>

      <div className="header-right">
        <div className="search-box">
          <Search
            sx={{ fontSize: 18, color: "rgba(0, 0, 0, 0.3)", flexShrink: 0 }}
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
