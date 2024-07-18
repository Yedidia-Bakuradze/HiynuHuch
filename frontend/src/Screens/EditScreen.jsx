import React from "react";
import { useParams } from "react-router-dom";


export default function EditScreen() {
    const {positionId} = useParams(); 

  return (
    <>
    positionId: {positionId}
    </>
  );
}
