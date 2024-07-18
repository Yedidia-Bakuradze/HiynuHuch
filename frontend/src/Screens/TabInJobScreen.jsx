import { Button, Header } from "react";
import Dashboard from "../components/Dashboard";
import { Link } from "react-router-dom";
import "../Style/ApplyForm.css";



function TabInJobPage() {


  return (
    <>

      <div className="Header-dashboard" >
        <Link to={'/'} className="Submit-btn"> 
           filter
        </Link>
      </div>
      <Dashboard />
      
    </>
  );
}

export default TabInJobPage;
