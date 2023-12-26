import React from "react";
import "./App.css";
import Header from "./layouts/header";
import Latest from "./pages/latest";
import Toner from "./pages/toner";
import Travel from "./pages/travel";

const App = () => {
  return (
    <div>
      <Header />
      <Toner />
      <Latest />
      <Travel />
    </div>
  );
};

export default App;
