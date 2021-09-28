// import dependencies
import React from "react";

//import Components
import About from "./components/About";
import Features from './components/Features';
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutSection from "./components/AboutSection"

function App() {
  return (
    <div className="body">
    <div className="wrapper">
      <Header />
      <About />
      <AboutSection />
      <Footer />
      </div>
     </div>
  );
}

export default App;
