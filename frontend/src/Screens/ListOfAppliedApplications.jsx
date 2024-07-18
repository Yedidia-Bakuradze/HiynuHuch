import { Button, Tab, Tabs } from "react-bootstrap";
import Dashboard from "../Components/Dashboard";
import { useState } from "react";
import {useNavigate, useParams } from "react-router-dom";
import ApplyForm from "../Components/ApplyForm";



function ListOfAppliedApplications() {
  const {positionId} = useParams();
  const navigator = useNavigate();
  const editCurrentPosition = ()=>{
    navigator('edit')
  };
  
  return (
    <>
      <Button className="filter"> 
        filter
      </Button>
      <Button onClick={editCurrentPosition} className="filter">
        Form 
      </Button>
      <Dashboard positionId={positionId}/>
      
    </>
  );
}

export default ListOfAppliedApplications;
