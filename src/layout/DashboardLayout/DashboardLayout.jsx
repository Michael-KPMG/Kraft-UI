import { useState } from "react";
import { Outlet } from "react-router";

import SideNav from "@/layout/SideNav/SideNav";
import Header from "@/layout/Header/Header";
import Footer from "@/layout/Footer/Footer";
import SidePanel from "@/layout/SidePanel/SidePanel"; // <-- Import

import "./DashboardLayout.scss";

const DashboardLayout = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false); // <-- New state

  const toggleSidebar = () => {
    setIsSidebarCollapsed((prev) => !prev);
  };

  const toggleSidePanel = () => {
    setIsSidePanelOpen((prev) => !prev);
  };

  const closeSidePanel = () => {
    setIsSidePanelOpen(false);
  };

  return (
    <div
      className={`dashboard-container ${
        isSidebarCollapsed ? "sidebar-collapsed" : ""
      }`}
    >
      <SideNav isCollapsed={isSidebarCollapsed} />
      <Header
        isCollapsed={isSidebarCollapsed}
        onToggleSidebar={toggleSidebar}
        onToggleSidePanel={toggleSidePanel} // <-- Pass to Header
      />
      <main className="main-content">
        <Outlet />
        <Footer />
      </main>
      <SidePanel isOpen={isSidePanelOpen} onClose={closeSidePanel} />{" "}
      {/* <-- Mount SidePanel */}
    </div>
  );
};

export default DashboardLayout;
