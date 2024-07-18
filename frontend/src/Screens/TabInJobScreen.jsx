import { Tab, Tabs } from "react-bootstrap";
import ApplyForm from   "../components/ApplyForm";
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
