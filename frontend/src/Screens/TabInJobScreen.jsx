import { Tab, Tabs } from "react-bootstrap";
import ApplyForm from "../components/ApplyForm";
import Dashboard from "../components/Dashboard";


function TabInJobScreen() {
  return (
    <>
      <Tabs id="uncontrolled-tab-example" className="mb-3">
        <Dashboard />
        <Tab eventKey="Dashboard" title="Dashboard">
          <Dashboard />
        </Tab>
        <Tab eventKey="Form" title="Form">
          <ApplyForm />
        </Tab>
      </Tabs>
    </>
  );
}

export default TabInJobScreen;
