import React, { Suspense, lazy } from "react";
import "./App.css";
import { router } from "./routes/routes";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MyErrorBoundaryExample from "./ErrorHandler/errorBoundary";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

function App() {
  return (
    <MyErrorBoundaryExample fallback="fallback">
      <RouterProvider router={router}></RouterProvider>
    </MyErrorBoundaryExample>
  );
}

export default App;
