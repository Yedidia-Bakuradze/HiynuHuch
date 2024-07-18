
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