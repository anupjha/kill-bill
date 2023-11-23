import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./scss/main.scss";
import * as serviceWorker from "./serviceWorker";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/root";
import ErrorPage from "./error-page";
import More from "./pages/more";
import T4Page from "./pages/T4Page";
import A3LandscapePage from "./pages/A3LandscapePage";
import A2LandscapePage from "./pages/A2LandscapePage";
import A4Page from "./pages/A4Page";
import A2Page from "./pages/A2Page";
import A3Page from "./pages/A3Page";
import T2Page from "./pages/T2Page";
const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "t4-page",
        element: <T4Page />,
      },
      {
        path: "more",
        element: <More />,
      },
      {
        path: "a3-landscape",
        element: <A3LandscapePage />,
      },
      {
        path: "a2-landscape",
        element: <A2LandscapePage />,
      },
      {
        path: "a4-page",
        element: <A4Page />,
      },
      {
        path: "a3-page",
        element: <A3Page />,
      },
      {
        path: "a2-page",
        element: <A2Page />,
      },
      {
        path: "t2-page",
        element: <T2Page />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
