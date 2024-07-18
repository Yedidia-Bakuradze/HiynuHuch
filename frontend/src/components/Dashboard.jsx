import "../Style/Dashboard.css";
import axios from "axios";
import { useParams ,Link } from "react-router-dom";
import { useEffect ,useState} from "react";
import { Card, Row, ProgressBar } from "react-bootstrap";
function Dashboard({positionId}) {
  
  const [applications,setApplications] = useState([]);
  const func = async () => {
    try {
      const { data } = await axios.post(`http://localhost:5000/api/empApp/submit`,{AppId: positionId});
      console.log(data);
      setApplications(data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  useEffect(() => {
    func();
  },[positionId]);


  console.log(applications)
  if(!applications){
    return <h1>Loading...</h1>
  }
  return (
    <>
    <div className="CardDiv">
      <Row className="CardRow">
        {applications.map((emp) => (
          <Card className="Card" key={emp._id}>
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
              <Link to={`details/${emp._id}`}  className="Submit-btn remove_text_dec" variant="primary">
                More Details
              </Link>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </div>
    </>
  );
}

export default Dashboard;
