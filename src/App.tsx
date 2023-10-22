import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/routes';
import MyErrorBoundaryExample from './ErrorHandler/errorBoundary';

function App() {
  return (
    <MyErrorBoundaryExample fallback="fallback">
      <RouterProvider router={router} />
    </MyErrorBoundaryExample>
  );
}

export default App;
