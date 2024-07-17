import { Tab, Tabs } from "react-bootstrap";
import ApplyForm from "../Components/ApplyForm";
import Dashboard from "../Components/Dashboard";
import FilterPopUp from "../Components/FilterPopUp";


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
