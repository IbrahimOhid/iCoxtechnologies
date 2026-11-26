import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./layout/Home";
import OurServices from "./page/OurServices/OurServices";
import Root from "./layout/Root";
import Work from "./page/Work/Work";
import ContactUs from "./page/ContactUs/ContactUs";
import FaqSection from "./page/Faq/FaqSection";
import SocialMediaManagement from "./components/Services/SocialMediaManagement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        // /service                          → services list
        // /service/social-media-management  → package page
        path: "service",
        children: [
          {
            index: true,
            element: <OurServices />,
          },
          {
            path: "social-media-management",
            element: <SocialMediaManagement />,
          },
        ],
      },
      {
        // Same page on a shorter URL: /social-media-management
        path: "social-media-management",
        element: <SocialMediaManagement />,
      },
      {
        path: "work",
        element: <Work />,
      },
      {
        path: "faq",
        element: <FaqSection />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
