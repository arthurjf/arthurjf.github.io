import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/style.css';
import App from './App';
import About from './sections/About';
import Privacy from './sections/Privacy';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "privacy",
    element: <Privacy />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);