import React from "react";
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

  );
}

export default App;
