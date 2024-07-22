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
import PortfolioItem from "./pages/portfolio-item";
import { ScrollToTop } from "./utils/scrolltoTop";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ScrollToTop>
        <Home />
      </ScrollToTop>
    )
  },
  {
    path: "/our-services",
    element: (
      <ScrollToTop>
        <OurServices />
      </ScrollToTop>
    )
  },
  {
    path: "/portfolio",
    element: (
      <ScrollToTop>
        <Portfolio />
      </ScrollToTop>
    )
  },
  {
    path: "/portfolio/:id",
    element: (
      <ScrollToTop>
        <PortfolioItem />
      </ScrollToTop>
    )
  },
  {
    path: "/about",
    element: (
      <ScrollToTop>
        <About />
      </ScrollToTop>
    )
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
// const path = useLocation().pathname;
window.scrollTo(0, 0);
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
