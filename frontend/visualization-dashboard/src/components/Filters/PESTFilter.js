import React from 'react';
import Select from 'react-select';

const PESTFilter = ({ options, selectedYear, onYearChange }) => {
  return (
    <div>
      <h3>End Year Filter</h3>
      <Select
        options={options}
        value={selectedYear}
        onChange={onYearChange}
      />
    </div>
  );
};

export default PESTFilter;
