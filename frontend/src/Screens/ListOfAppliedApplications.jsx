import { Button } from "react-bootstrap";
import Dashboard from "../Components/Dashboard";
import {useNavigate, useParams } from "react-router-dom";



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
