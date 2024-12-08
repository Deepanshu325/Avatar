
import React, { useState } from 'react';
import './Filter.css'

const Filters = ({ onChange }) => {
  const [domain, setDomain] = useState('');
  const [gender, setGender] = useState('');
  const [available, setAvailability] = useState('');

  const handleFilterChange = () => {
    onChange({ domain, gender, available });
  };

  return (
    <div className='filter'>
      <div>
      <select
      
        value={domain}
        onChange={(e) => setDomain(e.target.value)}
      >
       <option value="">Domain</option>
       <option>Sales</option>
       <option>Finance</option>
       <option>Management</option>
       <option>IT</option>
       <option>Marketing</option>
       <option> UI Designing </option>


      </select>
      </div>
      <div>
        <select  
         value={gender}
         onChange={(e) => setGender(e.target.value)}
        >
        <option>Gender</option>  
        <option>Male</option>
        <option>Female</option>
        <option>Bigender</option>
       
        </select>
        </div>
        <div>
        <label>Available
      <input
        type="checkbox"
        checked={available}
        onChange={(e) => setAvailability(e.target.checked)}
      />
      </label>
      </div>
      <div className='btn'>
      <button id="filter" onClick={handleFilterChange}>Apply Filters</button>
    </div>
    </div>
  );
};

export default Filters;
