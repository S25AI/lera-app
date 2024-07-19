import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import { Main } from './pages/Main';
import { BankPortfolio } from './pages/Case1';
import { LoanApp } from './pages/Case2';
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
  },
  {
    path: '/lera-app/portfolio/case1',
    element: <BankPortfolio />,
    errorElement: <ErrorPage />
  },
  {
    path: '/lera-app/portfolio/case2',
    element: <LoanApp />,
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
