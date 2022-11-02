import '../styles/Dropdown.css';
import React, { useState, useEffect } from 'react';



function Dropdown(props) {

  useEffect(() => {
    
  }, []);

  const capitalize = (s) => {
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  const handleClick = (e) => {
    props.handleDropClick()
    //alert(e)
  }

  const renderOptions = props.options.map((option) => {
    return <li value={option.value}>{option.label}</li>
  })

  const handleDiffClick = (e) => {
    if (e.target.tagName == 'LI') {
        //Did you click on one of the options?
        props.handleDiffChange(e.target.attributes[0].value)
        props.handleDropClick()

    }
  }


  return (
    <div className="dropdown" >
        <div className="dropdown-menu" 
            value={props.value} 
            onClick={handleClick}>
            <p>{capitalize(props.value)}</p>
            
        </div>
        <div className={`dropdown-items ${props.dropdownState}`}
            onClick={handleDiffClick} 
            >
            <ul>{renderOptions}</ul>
            
        </div>


    </div>
  );
}

export default Dropdown;
