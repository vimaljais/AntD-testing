import React, { useState } from "react";
import "./styles.css";
import Navigation from "./Navigation";
import About from "./Routes/About";
import Home from "./Routes/Home";

export default function App() {
  const [route, setRoute] = useState("home");
  return (
    <div>
      <Navigation setRoute={setRoute} />
      {route === "home" ? <Home /> : <About />}
    </div>
  );
}
