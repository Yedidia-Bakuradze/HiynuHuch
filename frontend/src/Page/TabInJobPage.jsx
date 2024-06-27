import { Tab, Tabs } from "react-bootstrap";
import ApplyForm from "./appllyForm";
import Dashboard from "./Dashboard";

function tabInJobPage() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="Dashboard" title="Dashboard">
        <Dashboard />
      </Tab>
      <Tab eventKey="Form" title="Form">
        <ApplyForm />
      </Tab>
    </Tabs>
  );
}

export default tabInJobPage;
