import { Card,Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import './Dashboard.css';
function Dashboard() {
  return (
    <Card className="Card" style={{ width: '15rem', height: '20rem' }}>
      <Card.Header>Header</Card.Header>
      <Card.Body>
      <Card.Text><h5>Name:</h5></Card.Text>
      <Card.Text><h5>Age:</h5></Card.Text>
      <Card.Text><h5>Email:</h5></Card.Text>
      <Card.Text><h5>Grade:</h5></Card.Text>
      <Card.Text><h5>Status:</h5></Card.Text>
      <Button  variant="primary">More Details</Button>
      </Card.Body>
    </Card>
  );  
}


export default Dashboard;