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

function App() {
  return (
    <MyErrorBoundaryExample fallback="fallback">
      <Suspense fallback={<>Loading...</>}>
        <RouterProvider router={router}></RouterProvider>
      </Suspense>
    </MyErrorBoundaryExample>
  );
}

export default App;
