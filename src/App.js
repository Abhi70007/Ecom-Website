import React from "react";
import "./Asset/css/style.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Shop from "./components/Shop";
import Brands from "./components/Brands";
import Most from "./components/Most";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Shop/>
    <Brands/>
    <Most/>
    <Review/>
    <About/>
    <Contact/>
    <Footer/>
    
    </>
      
    
  );
}

export default App;
