import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import HomePage from './pages/HomePage';
import CreateBeeper from './pages/CreateBeeper';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "CreateBeeper",
    element: <CreateBeeper/>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
 