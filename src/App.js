import { useLayoutEffect } from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation
} from 'react-router-dom';
import { Main } from './pages/Main';
import { BankPortfolio } from './pages/Case1';
import { LoanApp } from './pages/Case2';
import { VtbApp } from './pages/Case3';
import { SingleOps } from './pages/Case4';
import { TravelTechApp } from './pages/Case6';
import { TetrikaApp } from './pages/Case5';
import { DelovayaRus } from './pages/Case7';
import { ErrorPage } from './shared/components/ErrorPage';
import './app.css';

const ScrollToTopWrapper = ({ children }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

  return children
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTopWrapper>
          <Routes>
            <Route path='/' element={<Main />} errorElement={<ErrorPage />} />
            <Route path='/lera-app' element={<Main />} errorElement={<ErrorPage />} />
            <Route
              path='/lera-app/portfolio/case1'
              element={<BankPortfolio />}
              errorElement={<ErrorPage />} />
            <Route
              path='/lera-app/portfolio/case2'
              element={<LoanApp />}
              errorElement={<ErrorPage />} />
            <Route
              path='/lera-app/portfolio/case3'
              element={<VtbApp />}
              errorElement={<ErrorPage />} />
            <Route
              path='/lera-app/portfolio/case4'
              element={<SingleOps />}
              errorElement={<ErrorPage />} />
            <Route
              path='/lera-app/portfolio/case5'
              element={<TetrikaApp />}
              errorElement={<ErrorPage />} />
            <Route
              path='/lera-app/portfolio/case6'
              element={<TravelTechApp />}
              errorElement={<ErrorPage />} />
            <Route
              path='/lera-app/portfolio/case7'
              element={<DelovayaRus />}
              errorElement={<ErrorPage />} />
          </Routes>
        </ScrollToTopWrapper>
      </BrowserRouter>
    </div>
  );          
}

export default App;
