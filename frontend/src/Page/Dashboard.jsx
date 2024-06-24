import { Card,Button,Row,Col } from "react-bootstrap";
import './Dashboard.css';
import { emps } from "../data/emps.js";
function Dashboard() {
  return (
    <>
    
    <Row className="CardRow"> 
      {emps.map((emp) => (
        
        <Card className="Card" key={emp.id}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Text><h6>Name: {emp.name}</h6></Card.Text>
            <Card.Text><h6>Email: {emp.email}</h6></Card.Text>
            <Card.Text><h6>Grade: {emp.grade}</h6></Card.Text>
            <Card.Text><h6>Status: {emp.status}</h6></Card.Text>
            <Button variant="primary">More Details</Button>
          </Card.Body>
        </Card>

      ))}
    </Row>
    </>

  );  
}


export default Dashboard;