import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage } from '@/pages/LandingPage';
import { LoginPage } from '@/pages/LoginPage';
import { DashboardPage } from '@/pages/DashboardPage';
import { Toaster } from '@/components/ui/toaster';
import { ErrorBoundary } from '@/components/error/ErrorBoundary';
import { ROUTES } from '@/lib/constants';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path={ROUTES.HOME} element={<LandingPage />} />
          <Route path={ROUTES.LOGIN} element={<LoginPage />} />
          <Route path={ROUTES.DASHBOARD} element={<DashboardPage />} />
        </Routes>
        <Toaster />
      </Router>
    </ErrorBoundary>
  );
}

export default App;