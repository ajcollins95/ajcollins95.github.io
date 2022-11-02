import '../styles/App.css';
import Game from './Game'
import React, { useState, useEffect } from 'react';



function App() {

  useEffect(() => {
    // Do something
    
  }, []);

  const [dropdownState, setDropdownState ] = useState('display-off');

  const handleDropClick = () => {
      let newState;
      if (dropdownState == 'display-off') {
          newState = 'display-on'
      } else {
          newState = 'display-off'
      }
      setDropdownState(newState)
  }

  const handleClick = (e) => {
      if (dropdownState == 'display-on' && 
          e.target.parentNode.tagName != 'UL'){
          handleDropClick()
      }
  }

  return (
    <div className="App" onClick = {handleClick}>
      <Game
        handleDropClick={handleDropClick}
        dropdownState={dropdownState}
        onClick = {handleClick}
       />
    </div>
  );
}

export default App;
