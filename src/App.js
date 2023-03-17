import React from "react";

import { useRoutes } from "react-router-dom";
import "./App.css";
import NeededDatasApp from "./contextData/NeededDataApp";
import routes from "./routes";

export default function App() {
  const router = useRoutes(routes);

  return <NeededDatasApp>{router}</NeededDatasApp>;
}
