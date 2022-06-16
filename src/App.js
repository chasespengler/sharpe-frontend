import './App.css';
import NavBar from "./components/NavBar"
import {BrowserRouter as Router} from 'react-router-dom'
import SideBar from './components/SideBar';
import React, {useState} from 'react'
import Home from './pages/Home';

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
      <Home />
    </Router>
  );
}

export default App;
