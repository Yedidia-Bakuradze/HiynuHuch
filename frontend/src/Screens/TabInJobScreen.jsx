<<<<<<< HEAD:frontend/src/Page/TabInJobPage.jsx
import { Tab, Tabs } from "react-bootstrap";
import ApplyForm from "../components/appllyForm";
import Dashboard from "../components/Dashboard";
import FilterTable from "../components/FilterPopUp";
import { useState } from "react";


function TabInJobPage() {
  const [filters, setFilters] = useState([
    { id: 1, name: 'Date Range', type: 'Date' },
    { id: 2, name: 'Category', type: 'Select' },
    { id: 3, name: 'Search', type: 'Text' },
  ]);

  const handleReorder = (newOrder) => {
    setFilters(newOrder);
    // Here you can update your API request with the new filter order
    console.log('New filter order:', newOrder);
  };
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
        <FilterTable filters={filters} onReorder={handleReorder} />
        </Tab>
      </Tabs>
    </>
  );
}

export default TabInJobPage;
=======
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
>>>>>>> 443e100eb810df0ae7ae44095f33269cd6c4cc97:frontend/src/Screens/TabInJobScreen.jsx
