import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './components/error/ErrorPage';
import MainLayout from './components/layout/MainLayout';
import DashboardPage from './pages/dashboard/DashboardPage';
import SummaryPage from './pages/summary/SummaryPage';

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <SummaryPage />,
        path: "/",
      },
      {
        element: <DashboardPage />,
        path: "/dashboard",
      },
    ],
  },
]);
