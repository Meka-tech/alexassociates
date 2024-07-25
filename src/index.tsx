import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { StyleSheetManager } from "styled-components";
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from "./pages/home";
import OurServices from "./pages/ourServices";
import Portfolio from "./pages/portfolio";
import About from "./pages/about";
import PortfolioItem from "./pages/portfolio-item";
import { ScrollToTop } from "./utils/scrolltoTop";
import GetQuote from "./pages/get-quote";
import UserRequests from "./pages/admin/user-requests";
import Message from "./pages/admin/message";
import Quote from "./pages/admin/quote";
import Auth from "./pages/auth";
import { AuthProvider } from "./context/authContext";
import PrivateRoute from "./components/private-route";
import ManageWebsite from "./pages/admin/manage-website";

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
  },
  {
    path: "/get-quote",
    element: (
      <ScrollToTop>
        <GetQuote />
      </ScrollToTop>
    )
  },
  {
    path: "/auth",
    element: (
      <ScrollToTop>
        <Auth />
      </ScrollToTop>
    )
  },
  {
    path: "/admin/user-requests",
    element: (
      <ScrollToTop>
        <UserRequests />
      </ScrollToTop>
    )
  },
  {
    path: "/admin/message/:id",
    element: (
      <ScrollToTop>
        <Message />
      </ScrollToTop>
    )
  },
  {
    path: "/admin/quote/:id",
    element: (
      <ScrollToTop>
        <Quote />
      </ScrollToTop>
    )
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <StyleSheetManager shouldForwardProp={() => true}>
      <Router>
        <AuthProvider>
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/our-services" element={<OurServices />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/portfolio/:id" element={<PortfolioItem />} />
              <Route path="/about" element={<About />} />
              <Route path="/get-quote" element={<GetQuote />} />
              <Route path="/auth" element={<Auth />} />
              <Route
                path="/admin/user-requests"
                element={
                  <PrivateRoute>
                    <UserRequests />
                  </PrivateRoute>
                }
              />
              <Route
                path="/admin/message/:id"
                element={
                  <PrivateRoute>
                    <Message />
                  </PrivateRoute>
                }
              />
              <Route
                path="/admin/quote/:id"
                element={
                  <PrivateRoute>
                    <Quote />
                  </PrivateRoute>
                }
              />
              <Route
                path="/admin/manage-website"
                element={
                  <PrivateRoute>
                    <ManageWebsite />
                  </PrivateRoute>
                }
              />
            </Routes>
          </ScrollToTop>
        </AuthProvider>
      </Router>
      {/* <RouterProvider router={router} /> */}
    </StyleSheetManager>
  </React.StrictMode>
);
