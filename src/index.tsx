import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { StyleSheetManager } from "styled-components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import OurServices from "./pages/ourServices";
import Portfolio from "./pages/portfolio";
import About from "./pages/about";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/our-services",
    element: <OurServices />
  },
  { path: "/portfolio", element: <Portfolio /> },
  { path: "/about", element: <About /> }
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <StyleSheetManager shouldForwardProp={() => true}>
      <RouterProvider router={router} />
    </StyleSheetManager>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
