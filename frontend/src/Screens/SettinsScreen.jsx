import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";


function Settings() {
  const { formId } = useParams();
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(files.length === 0 && !description){
      alert("Please fill in at least one of the fields");
      return;
    }
    const formData = new FormData();
    formData.append("description", description);
    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }
    try {
      const { data } = await axios.post(`http://localhost:5000/api/empApp`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(data);
    } catch (error) {
      console.error("There was an error uploading the files!", error);
    }
  };

  return (
    <div className="FormBorder border rounded m-4 p-4">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label><h3>Describe the company: </h3></Form.Label>
          <Form.Control 
            as="textarea" 
            placeholder=" " 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicResume">
          <Form.Label><h3>Please upload your company CV's: </h3></Form.Label>
          <Form.Control 
            type="file" 
            multiple 
            onChange={(e) => setFiles(e.target.files)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Upload
        </Button>
      </Form>
    </div>
  );
}

export default Settings;
