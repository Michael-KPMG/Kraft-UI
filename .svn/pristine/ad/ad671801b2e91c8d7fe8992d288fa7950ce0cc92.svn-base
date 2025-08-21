import { createBrowserRouter } from "react-router";
import Login from "@/pages/Login/Login";
import DashboardLayout from "@/layout/DashboardLayout/DashboardLayout";
import authLoader from "@/auth/authLoader";
import HomePage from "@/pages/Home/HomePage";
import AboutPage from "@/pages/About/AboutPage";
// import ErrorPage from "@/pages/Error/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/",
    loader: !authLoader,
    Component: DashboardLayout,
    children: [
      { path: "", element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
    ],
  },
]);

export default router;
