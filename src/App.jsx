import React, { useState } from "react";
import TopBar from "./components/topBar/TopBar"
import Intro from "./components/intro/Intro";
import Contact from "./components/contact/Contact";
import PortFolio from "./components/portfolio/PortFolio";
import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
import Menu from "./components/menu/Menu";
import "./app.scss";

const App = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open)
  }

  return (
    <div className="app">
      <TopBar open={open} setOpen={toggleMenu} />
      <Menu open={open} setOpen={toggleMenu} />
      <div className="sections">
        <Intro />
        <PortFolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
