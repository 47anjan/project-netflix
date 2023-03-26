import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Navbar from "./components/Navbar";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Serach from "./pages/Serach";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search/:value",
        element: <Serach />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
