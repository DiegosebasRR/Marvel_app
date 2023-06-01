import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Historial, { loader as heroesLoader } from "./routes/historial";
import Search from "./routes/search";
import ErrorPage from "./errorPage";
import Heroe, { loader as heroeLoader } from "./routes/heroe";
import { action as destroyAction } from "./routes/destroy";
import Index from "./routes";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Search />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Historial />,
        loader: heroesLoader,
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },
          {
            path: "heroe/:heroeId",
            element: <Heroe />,
            loader: heroeLoader,
          },
          {
            path: "/heroe/:heroeId/destroy",
            action: destroyAction,
            errorElement: <div>Oops! There was an error.</div>,
          },
        ],
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
