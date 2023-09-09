import React, { Suspense, lazy } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
const Home = lazy(() => import("../pages/home/home"));
const Login = lazy(() => import("../pages/login/login"));
const Register = lazy(() => import("../pages/register/register"));
const CreateBlog = lazy(() => import("../pages/createBlog/createBlog"));
const ViewSingleBlog = lazy(
  () => import("../pages/viewSingleBlog/viewSingleBlog")
);
const RootLayout = lazy(() => import("../layout/rootLayout"));
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/createblog",
        element: <CreateBlog />,
      },
      {
        path: "/viewsingleblog",
        element: <ViewSingleBlog />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
