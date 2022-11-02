import '../styles/FlagCount.css';
import flagSrc from '../assets/flag.svg';
import React, { useState, useEffect } from 'react';



function FlagCount(props) {

  useEffect(() => {
    // Do something
    
  }, []);

  return (
    <div className="flag-count">
        <div className='img-frame'>
            <img className='flag-icon' src={flagSrc}></img>
        </div>
        <p>{props.remainingFlags}</p>

    </div>
  );
}

export default FlagCount;
