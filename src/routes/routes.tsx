import React, { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorBoundary from "../ErrorHandler/errorBoundary";
// import { NotFound } from "../ErrorHandler";
const Home = lazy(() => import("../pages/home/home"));
const Login = lazy(() => import("../pages/login/login"));
const Register = lazy(() => import("../pages/register/register"));
const CreateBlog = lazy(() => import("../pages/createBlog/createBlog"));
const ViewSingleBlog = lazy(
  () => import("../pages/viewSingleBlog/viewSingleBlog")
);
const RootLayout = lazy(() => import("../layout/rootLayout"));
const NotFound = lazy(() => import("../ErrorHandler/notfound"));
const WriteBlog = lazy (()=>import("../pages/write/writeBlog"))

// import RootLayout from "../layout/rootLayout";
// import Home from "../pages/home/home";
// import CreateBlog from "../pages/createBlog/createBlog";
// import ViewSingleBlog from "../pages/viewSingleBlog/viewSingleBlog";
// import Login from "../pages/login/login";
// import Register from "../pages/register/register";
// import NotFound from "../ErrorHandler/notfound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: (
          <ErrorBoundary fallback="fallback">
            <Suspense fallback={<>Loading...</>}>
              <Home />
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: "/createblog",
        element: (
          <ErrorBoundary fallback="fallback">
            <Suspense fallback={<>Loading...</>}>
              {" "}
              <CreateBlog />
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: "/viewsingleblog/:id",
        element: (
          <ErrorBoundary fallback="fallback">
            <Suspense fallback={<>Loading...</>}>
              <ViewSingleBlog />
            </Suspense>
          </ErrorBoundary>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: (
      <ErrorBoundary fallback="fallback">
        <Suspense fallback={<>Loading...</>}>
          <Login />
        </Suspense>
      </ErrorBoundary>
    ),
  },
  {
    path: "/register",
    element: (
      <ErrorBoundary fallback="fallback">
        <Suspense fallback={<>Loading...</>}>
          <Register />
        </Suspense>
      </ErrorBoundary>
    ),
  },
  {
    path: "*",
    element: (
      <ErrorBoundary fallback="fallback">
        <Suspense fallback={<>Loading...</>}>
          {" "}
          <NotFound />
        </Suspense>
      </ErrorBoundary>
    ),
  },
]);
