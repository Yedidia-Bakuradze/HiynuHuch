import { Form, Button, Container } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ListOfEmployees } from "../Data/ListOfEmployees.js";
import "../Style/PositionDetails.css";

function PositionDetails() {
  const { positionId } = useParams();
  return <>
  This page would be loaded for every position
  </>
}

export default PositionDetails;
