import React, { useState } from "react";
import Navbar from "./pages/Navbar";
import Content from "./pages/Content";
import { BrowserRouter, Route } from "react-router-dom";
import Feature from "./pages/Feature";
import Footer from "./pages/Footer";
import Login from "./pages/Login";
import Pricing from "./pages/Pricing";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
    console.log("sda");
  };

  return (
    <BrowserRouter>
      <div>
        <Navbar toggle={toggle} isOpen={isOpen} />
        <Route path="/" exact component={Content} />
        <Route path="/Feature" component={Feature} />
        <Route path="/Login" component={Login} />
        <Route path="/Pricing" component={Pricing} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
