// import { Navigate, useRoutes } from 'react-router-dom';
// // layouts
// import DashboardLayout from './layouts/dashboard';
// import LogoOnlyLayout from './layouts/LogoOnlyLayout';
// //
// import Login from './pages/Login';
// import Register from './pages/Register';
// import DashboardApp from './pages/DashboardApp';
// import Products from './pages/Products';
// import Blog from './pages/Blog';
// import User from './pages/User';
// import NotFound from './pages/Page404';

// // ----------------------------------------------------------------------

// export default function Router() {
//   return useRoutes([
//     {
//       path: '/dashboard',
//       element: <DashboardLayout />,
//       children: [
//         { path: 'app', element: <DashboardApp /> },
//         { path: 'user', element: <User /> },
//         { path: 'products', element: <Products /> },
//         { path: 'blog', element: <Blog /> }
//       ]
//     },
//     {
//       path: '/',
//       element: <LogoOnlyLayout />,
//       children: [
//         { path: '/', element: <Navigate to="/dashboard/app" /> },
//         { path: 'login', element: <Login /> },
//         { path: 'register', element: <Register /> },
//         { path: '404', element: <NotFound /> },
//         { path: '*', element: <Navigate to="/404" /> }
//       ]
//     },
//     { path: '*', element: <Navigate to="/404" replace /> }
//   ]);
// }

import React from 'react';
import { useRoutes } from 'react-router-dom';
import DashboardLayout from './layouts/dashboard';
import ProductsPage from './pages/products';
import HomePage from './pages/home';
// import LoginPage from './pages/login';
// import ProtectRoute from './utils/ProtectRoute';
import Charts from './pages/charts';

function Router() {
  return useRoutes([
    {
      path: '/',
      element: (
        // <ProtectRoute type="admin">
        <DashboardLayout />
        //  </ProtectRoute>
      ),
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: 'products',
          element: <ProductsPage />,
        },
        {
          path: 'charts',
          element: <Charts />,
        },
        // {
        //   path: 'test3',
        //   element: <ProductsPage />,
        // },
        // { path: 'products', element: <Products /> },
        // { path: 'blog', element: <Blog /> }
        // { path: 'anything', element:  <ProtectRoute>
        // <anything />
        // </ProtectRoute>
        // }
      ],
    },
    // {
    //   path: '/login',
    //   element: <DashboardLayout />,
    //   children: [
    //     {
    //       path: '/login',
    //       element: <LoginPage />,
    //     },
    //     // { path: '/login', element: <Navigate to="/home" /> },
    //   ],
    // },
  ]);
}

export default Router;
