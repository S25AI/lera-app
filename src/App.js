import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import { Main } from './pages/Main';
import { ErrorPage } from './shared/components/ErrorPage';
import './app.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />
  },
  {
    path: '/lera-app',
    element: <Main />,
    errorElement: <ErrorPage />
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
