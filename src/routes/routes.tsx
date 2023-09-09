import React, { Suspense, lazy } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ErrorBoundary from "../ErrorHandler/errorBoundary";
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
        element: (
          <ErrorBoundary fallback="fallback">
            <Home />
          </ErrorBoundary>
        ),
      },
      {
        path: "/createblog",
        element: (
          <ErrorBoundary fallback="fallback">
            <CreateBlog />
          </ErrorBoundary>
        ),
      },
      {
        path: "/viewsingleblog",
        element: (
          <ErrorBoundary fallback="fallback">
            <ViewSingleBlog />
          </ErrorBoundary>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: (
      <ErrorBoundary fallback="fallback">
        <Login />
      </ErrorBoundary>
    ),
  },
  {
    path: "/register",
    element: (
      <ErrorBoundary fallback="fallback">
        <Register />
      </ErrorBoundary>
    ),
  },
]);
