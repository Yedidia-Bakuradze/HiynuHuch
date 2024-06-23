import React from "react";
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.css'; 
import Nav from 'react-bootstrap/Nav'; 
import Nav_footer from './Nav_footer'; 
import './Nav_footer.css';
import './App.css';
function App() {
  
  return (
    <div className = "nav" style={{ width: '80px', height: '1000px', position: 'fixed', top: 0, left: 0 }}> 
      <Nav > 
        <Nav.Item> 
          <Nav.Link  href="/Profile">Link</Nav.Link> 
        </Nav.Item> 
        <Nav_footer></Nav_footer>
      </Nav> 
      
    </div> 
=======
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Main from "./Main";

function App() {
  
  return (
    <h1> bla</h1>
>>>>>>> efb246126e93b96eda99f2be993fcf9c62c6451b

  );
}

export default App;
