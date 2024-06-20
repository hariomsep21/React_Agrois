import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Contact from "./components/Contact/Contact.jsx";
import News from "./components/News/News.jsx";
import Service from "./components/Service/Service.jsx";
import About from "./components/About/About.jsx";
import Home from "./components/Home/Home.jsx";
import Project from "./components/Project/Project.jsx";
import Login from "./components/ApiData/Login.jsx";
import Registeration from "./components/ApiData/Registration.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/service", element: <Service /> },
      { path: "/contact", element: <Contact /> },
      { path: "/news", element: <News /> },
      { path: "/project", element: <Project /> },
      { path: "/login", element: <Login /> },
      { path: "/registration", element: <Registeration /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
