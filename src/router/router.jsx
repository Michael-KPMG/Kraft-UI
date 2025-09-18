import { useState } from "react";
import { Outlet } from "react-router-dom";
import CreativePage from "@/pages/Creative/Creative";
import { createBrowserRouter } from "react-router-dom";
import Login from "@/pages/Login/Login";
import DashboardLayout from "@/layout/DashboardLayout/DashboardLayout";
import authLoader from "@/auth/authLoader";
import HomePage from "@/pages/Home/HomePage";
import AboutPage from "@/pages/About/AboutPage";
import CreativeStudio from "@/pages/CreativeStudio/CreativeStudio";
import StudioPage from "@/pages/StudioPage/StudioPage";

 
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    loader: authLoader,
    element: <DashboardLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "creative-studio", element: <CreativeStudio /> },
 
      // NEW: route for the teammate's new page (Save image)
      // visit: /creative-studio/save-image
      {
        path: "creative-studio/save-image",
        element: <CreativePage />,
      },
      {
        path: "creative-studio/preview",
        element: <StudioPage />,
      },
    ],
  },
]);
 
export default router;
 