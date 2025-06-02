import React, { useState } from "react";
import Navbar from "./component/Navbar";
import Newsboard from "./component/Newsboard";
import "./App.css";

const App = () => {
  // const [category, setCategory] = useState("");
  const [category, setCategory] = useState("home");

  return (
    <div>
      <Navbar category={category} setCategory={setCategory} />
      <Newsboard category={category} />
    </div>
  );
};

export default App;
