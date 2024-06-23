import React from "react";
import 'bootstrap/dist/css/bootstrap.css'; 
import Nav from 'react-bootstrap/Nav'; 
import './Nav_footer.css';
function Nav_footer() {
  
    return (
      <div > 
        <Nav className="Nav_footer"> 
          <Nav.Item> 
            <Nav.Link href="/Settings">Settings</Nav.Link> 
          </Nav.Item> 
          <Nav.Item> 
            <Nav.Link href="/Profile">Profile</Nav.Link> 
          </Nav.Item> 
          
        </Nav> 
      </div> 
  
    );
}
  
export default Nav_footer;
  