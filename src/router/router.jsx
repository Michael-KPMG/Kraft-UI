import { useState } from "react";
import { Outlet } from "react-router-dom";

import { createBrowserRouter } from "react-router-dom";
import Login from "@/pages/Login/Login";
import DashboardLayout from "@/layout/DashboardLayout/DashboardLayout";
import authLoader from "@/auth/authLoader";
import HomePage from "@/pages/Home/HomePage";
import AboutPage from "@/pages/About/AboutPage";
import CreativeStudio from "@/pages/CreativeStudio/CreativeStudio";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    loader: authLoader, // fixed
    element: <DashboardLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "creative-studio", element: <CreativeStudio /> },
    ],
  },
]);

export default router;
