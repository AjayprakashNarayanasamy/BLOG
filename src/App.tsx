import "./App.css";
import { router } from "./routes/routes";
import { RouterProvider } from "react-router-dom";
import MyErrorBoundaryExample from "./ErrorHandler/errorBoundary";

function App() {
  return (
    <MyErrorBoundaryExample fallback="fallback">
      <RouterProvider router={router}></RouterProvider>
    </MyErrorBoundaryExample>
  );
}

export default App;
