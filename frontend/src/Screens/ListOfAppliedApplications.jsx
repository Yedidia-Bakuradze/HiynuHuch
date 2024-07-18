<<<<<<< HEAD:frontend/src/Screens/TabInJobScreen.jsx
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
=======
import { Button, Tab, Tabs } from "react-bootstrap";
import Dashboard from "../Components/Dashboard";
import { useState } from "react";
import { useParams } from "react-router-dom";



function ListOfAppliedApplications() {
  const {positionId} = useParams();


  
  const [filters, setFilters] = useState([
    { id: 1, name: 'Date Range', type: 'Date' },
    { id: 2, name: 'Category', type: 'Select' },
    { id: 3, name: 'Search', type: 'Text' },
  ]);
  
  const handleReorder = (newOrder) => {
    setFilters(newOrder);
    // Here you can update your API request with the new filter order
    console.log('New filter order:', newOrder);
  };
  return (
    <>
      <Button className="filter"> 
        filter
      </Button>
      <Dashboard positionId={positionId}/>
      
    </>
  );
}

export default ListOfAppliedApplications;
>>>>>>> ff1504bf82c929d3cc4d836367d40df3c33cab6e:frontend/src/Screens/ListOfAppliedApplications.jsx
