import React from "react";

import Nav from "./component/Nav";

import Header from "./component/Header";

import Product from "./component/Product";

import About from "./component/About";

import Contact from "./component/Contact";

import Banner from "./component/Banner";

function App() {
  return (
    <div className="App">
      {
        <>
          <Nav/>
          <Header/>
          <Product/>
          <About/>
          <Contact/>
          <Banner/>
        </>
      }
    </div>
  );
}

export default App;
