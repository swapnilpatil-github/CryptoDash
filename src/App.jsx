import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar.jsx';
import Home from './pages/Home/Home.jsx';
import Coin from './pages/Coin/Coin.jsx';
import Footer from './components/Footer/Footer.jsx';
import Contactus from './pages/Contactus/Contactus.jsx';
import Aboutus from './pages/About/Aboutus.jsx';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/coin/:coinId" element={<Coin />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
