import React from "react";
import { useParams } from "react-router-dom";
import ApplyForm from "../Components/ApplyForm";


export default function EditScreen() {
    const {positionId} = useParams(); 

  return (
    <>
    <ApplyForm positionId={positionId}/>
    </>
  );
}
