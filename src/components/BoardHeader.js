import '../styles/BoardHeader.css';
import FlagCount from './FlagCount'
import Dropdown from './Dropdown';
import React, { useState, useEffect } from 'react';



function BoardHeader(props) {

  useEffect(() => {
    // Do something
    
  }, []);

  const options = [
    { label: 'Easy', value: 'easy' },
    { label: 'Medium', value: 'medium' },
    { label: 'Hard', value: 'hard' },
  ];
  

  const handleDiffChange = (clickedVal) => {
    props.handleDiffChange(clickedVal)

  };

  return (
    <div className="BoardHeader">
       <div className="app-row">
        <Dropdown
          options={options}
          value={props.difficulty}
          handleDropClick={props.handleDropClick}
          handleDiffChange={handleDiffChange}
          dropdownState={props.dropdownState}

        />
        <FlagCount
          remainingFlags={props.difficulties[props.difficulty].mines - props.placedFlags}
          placedFlags={props.placedFlags} />

       </div>
    </div>
  );
}

export default BoardHeader;
