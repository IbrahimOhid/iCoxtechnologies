import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./layout/Home";
import OurServices from "./page/OurServices/OurServices";
import Root from "./layout/Root";
import Work from "./page/Work/Work";
import ContactUs from "./page/ContactUs/ContactUs";
import FaqSection from "./page/Faq/FaqSection";

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
        path: "/service",
        element: < OurServices/>,
      },
      {
        path:"/work",
        element: <Work/>
      },
      {
        path:"/faq",
        element: <FaqSection/>
      },
      {
        path:"/contact",
        element: <ContactUs/>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>,
);
