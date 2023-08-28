import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Visualization from './Visualization';
import EndYearFilter from './Filters/EndYearFilter';
// import TopicsFilter from './Filters/TopicsFilter';
// import SectorFilter from './Filters/SectorFilter';
// import RegionFilter from './Filters/RegionFilter';
// import PESTFilter from './Filters/PESTFilter';
// import SourceFilter from './Filters/SourceFilter';
// import SWOTFilter from './Filters/SWOTFilter';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [selectedYear, setSelectedYear] = useState(null);
  // Other filter states (e.g., topics, sectors, regions, etc.)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/data');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleYearChange = (selectedOption) => {
    setSelectedYear(selectedOption);
    // Apply filter logic based on selected year
    // Update data to be displayed in visualizations
  };

  // Other filter handlers

  return (
    <div>
      <h1>Data Visualization Dashboard</h1>
      <EndYearFilter
        options={[{ value: '2022', label: '2022' }, /* ... */]}
        selectedYear={selectedYear}
        onYearChange={handleYearChange}
      />
      {/* Render other filters */}
      <Visualization data={data} />
    </div>
  );
};

export default Dashboard;
