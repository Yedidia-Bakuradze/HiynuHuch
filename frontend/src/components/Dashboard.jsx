import { Card, Button, Row, ProgressBar } from "react-bootstrap";
import "../css/Dashboard.css";
import { emps } from "../data/emps.js";

function Dashboard() {
  return (
    <>
      <Row className="CardRow">
        {emps.map((emp) => (
          <Card className="Card" key={emp.id}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Text>
                <h8>Name: {emp.name}</h8>
              </Card.Text>
              <Card.Text>
                <h8>Email: {emp.email}</h8>
              </Card.Text>
              <Card.Text>
                <h8>Grade: {emp.grade}</h8>
              </Card.Text>
              <Card.Text>
                <h8>Status</h8>
              </Card.Text>
              <ProgressBar now={emp.status} label={`${emp.status}%`} />
              <Button className="Submit-btn" variant="primary">
                More Details
              </Button>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </>
  );
}

export default Dashboard;
