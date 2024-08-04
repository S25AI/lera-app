import {
  createBrowserRouter,
  RouterProvider,
  useLocation
} from 'react-router-dom';
import { Main } from './pages/Main';
import { BankPortfolio } from './pages/Case1';
import { LoanApp } from './pages/Case2';
import { VtbApp } from './pages/Case3';
import { SingleOps } from './pages/Case4';
import { TravelTechApp } from './pages/Case6';
import { TetrikaApp } from './pages/Case5';
import { ErrorPage } from './shared/components/ErrorPage';
import './app.css';
import { useLayoutEffect } from 'react';

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
  },
  {
    path: '/lera-app/portfolio/case3',
    element: <VtbApp />,
    errorElement: <ErrorPage />
  },
  {
    path: '/lera-app/portfolio/case4',
    element: <SingleOps />,
    errorElement: <ErrorPage />
  },
  {
    path: '/lera-app/portfolio/case5',
    element: <TetrikaApp />,
    errorElement: <ErrorPage />
  },
  {
    path: '/lera-app/portfolio/case6',
    element: <TravelTechApp />,
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
