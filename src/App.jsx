import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Navbar from "./components/Navbar";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Serach from "./pages/Serach";
import { Movies } from "./pages/Movies";
import TvShows from "./pages/TvShows";
import Trending from "./pages/Trending";
import MyList from "./pages/MyList";
import Details from "./pages/Details";
import ListContext from "./context/listContext";
import PageNotFound from "./pages/PageNotFound";

function App() {
  const [list, setList] = useState([]);

  return (
    <ListContext.Provider value={{ list, setList }}>
      <Navbar />
      <Outlet />
    </ListContext.Provider>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "search/:value",
        element: <Serach />,
      },
      {
        path: "movies",
        element: <Movies />,
      },
      {
        path: "tv",
        element: <TvShows />,
      },
      {
        path: "trending",
        element: <Trending />,
      },
      {
        path: "mylist",
        element: <MyList />,
      },
      {
        path: "details",
        element: <Details />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
