import { Card, Button, Row, ProgressBar } from "react-bootstrap";
import "../Style/Dashboard.css";
import { ListOfEmployees } from  "../Data/ListOfEmployees";
import { Link} from "react-router-dom";
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
              <br></br>
              <Link to={`/Moredetails/${emp._id.$oid}`}  className="Submit-btn remove_text_dec" variant="primary">
                More Details
              </Link>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </>
  );
}

export default Dashboard;
