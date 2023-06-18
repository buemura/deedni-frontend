import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CandidatesLogin from './pages/candidates/login';
import EmployersLogin from './pages/employers/login';
import ErrorPage from './pages/error-page';
import Root from './pages/root';
import './styles/index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />
  },
  {
    path: '/cadidates/login',
    element: <CandidatesLogin />
  },
  {
    path: '/employers/login',
    element: <EmployersLogin />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
