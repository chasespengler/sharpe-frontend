import './App.css';
import NavBar from "./components/NavBar"
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>
      <NavBar />
      <h1>Hello, Investor.</h1>
    </Router>
  );
}

export default App;
