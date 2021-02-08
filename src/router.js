import React from "react";
import Register from "./components/Register"
import Login from './components/Login';

// import Contact from "./components/Contact";
// import About from "./components/About";

const routes = {
  "/register": () => <Register />,
  "/login": () => <Login />
};

export default routes;