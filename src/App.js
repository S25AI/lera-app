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
    path: '/contacts',
    element: <div>this is contacts page</div>
  },
  {
    path: '/portfolio',
    element: <div>this is portfolio</div>
  },
  {
    path: '/services',
    element: <div>this is servies pages</div>
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
