import { Card, Row, ProgressBar } from "react-bootstrap";
import "../Style/Dashboard.css";
import {Link} from "react-router-dom";

function Dashboard({positionId}) {
  return (
    <>
    {/* <div className="CardDiv">
      <Row className="CardRow">
        {listOfAppliedEmployees.map((emp) => (
          <Card className="Card" key={emp.id}>
            <Card.Header>Header</Card.Header>
            <Card.Body >
              <Card.Text>
                <h9>Name: {emp.name}</h9>
              </Card.Text>
              <Card.Text>
                <h9>Email: {emp.email}</h9>
              </Card.Text>
              <Card.Text>
                <h9>Grade: {emp.grade}</h9>
              </Card.Text>
              <Card.Text>
                <h9>Status</h9>
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
    </div> */}
    </>
  );
}

export default Dashboard;
