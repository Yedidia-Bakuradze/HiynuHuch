import { Card, Button, Row, ProgressBar } from "react-bootstrap";
<<<<<<< HEAD
import "../css/Dashboard.css";
import { emps } from "../data/emps.js";

=======
import "../Style/Dashboard.css";
import { ListOfEmployees } from "../Data/ListOfEmployees.js";
>>>>>>> 443e100eb810df0ae7ae44095f33269cd6c4cc97
function Dashboard() {
  return (
    <>
      <Row className="CardRow">
        {ListOfEmployees.map((emp) => (
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
