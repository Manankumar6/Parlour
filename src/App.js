import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import About from './routing/About';

import { Route, Routes } from 'react-router-dom';

import Navbar from './routing/Navbar';
import Service from './routing/Service';
import Home from './routing/Home';
import Footer from './routing/Footer';
import Priceing from './routing/Priceing';
import Side from './Side';
import Contact from './routing/Contact';

function App() {


  return (
    <>

      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/service" element={<Service name='Service' />} />
        <Route exact path="/price" element={<Priceing />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route path='*' element={<Home />} />
      </Routes>
      <Side />
      <Footer />
    </>
  );
}

export default App;
