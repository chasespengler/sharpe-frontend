import './App.css';
import NavBar from "./components/NavBar"
import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import SideBar from './components/SideBar';
import React, {useState} from 'react';
import Home from './pages/Home';
import Footer from './components/Footer'
import Tiers from './pages/Tiers'

function App() {

  /* navbar toggle logic */
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Router>
      <NavBar toggle={toggle}/>
      <SideBar isOpen={isOpen} toggle={toggle}/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/tiers" element={<Tiers />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
