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
            <Card.Header>{Math.floor(Math.random()*100)}</Card.Header>
            <Card.Body >
              <Card.Text>
                <h9>Name: {emp.name}</h9>
              </Card.Text>
              <Card.Text>
                <h9>Email: {emp.email}</h9>
              </Card.Text>
              <Card.Text>
                <h9>Grade: {Math.floor(Math.random()*100)}</h9>
              </Card.Text>
              <Card.Text>
                <h9>Status: {Math.floor(Math.random()*100) >50? "Panding": "Waiting for a tech interview" }</h9>
              </Card.Text>
              <ProgressBar now={Math.floor(Math.random()*100)} label={Math.floor(Math.random()*100)} />
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
