import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//

import UserPage from './pages/UserPage';

import DashboardAppPage from './pages/DashboardAppPage';
import Simulation from "./pages/Simulation";

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'options', element: <UserPage /> },
        { path: 'simulation', element: <Simulation /> },
       
      ],
    },
    
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: '/dashboard', element: <Navigate to="/dashboard" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/dashboard/app" replace />,
    },
  ]);

  return routes;
}
