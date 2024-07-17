import { Tab, Tabs } from "react-bootstrap";
import ApplyForm from "../components/ApplyForm";
import Dashboard from "../components/Dashboard";
import FilterPopUp from "../components/FilterPopUp";

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
        <Tab eventKey="Filter" title="Filter">
         <FilterPopUp/>
        </Tab>
      </Tabs>
    </>
  );
}

export default TabInJobScreen;
