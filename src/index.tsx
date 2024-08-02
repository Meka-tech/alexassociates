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
import UploadProject from "./pages/admin/portfolio/upload-project";
import EditProject from "./pages/admin/portfolio/edit-project";

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
              <Route
                path="/admin/manage-website/upload-project"
                element={
                  <PrivateRoute>
                    <UploadProject />
                  </PrivateRoute>
                }
              />
              <Route
                path="/admin/manage-website/edit-project/:id"
                element={
                  <PrivateRoute>
                    <EditProject />
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
