import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const Sorting = () => {
  const sorting = ["Type", "Price", "Review", "Color", "Material", "Offer", "All Filters"]
  return (
    <div className='m-3 d-flex flex-sm-wrap justify-content-lg-start justify-content-around '>
      {sorting.map((sort, idx) => (
        <DropdownButton key={idx} className='m-3' id="dropdown-basic-button" title={sort}>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
      ))}
    </div>
  );
};

export default Sorting;