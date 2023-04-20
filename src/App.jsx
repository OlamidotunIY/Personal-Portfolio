import React from "react";
import { BrowserRouter } from "react-router-dom";
import { About, Hero, Nav} from "./components";
import Service from "./components/Service";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import StarsCanvas from "./components/canvas/Stars"

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Nav />
          <Hero />
        </div>
        <About />
        <Service />
        <Skills />
        <Projects />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
