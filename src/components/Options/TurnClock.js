import React, { useState } from 'react'
const TurnClock = ({}) => {

  


  const [steps, setSteps] = useState(0);
  
  const parentContainerStyle = {
    maxWidth: '200px',
    margin: '10px',
  };

  const handleInputChange = (e) => {
    const inputValue = parseInt(e.target.value);
    if (!isNaN(inputValue)) {
     
      setSteps(inputValue);
    } else {
     
      setSteps(0);
    }
  };

  return (
    <div style={parentContainerStyle}>
      <div className="bg-blue-500 rounded-md p-1 flex items-center">
        <p className="text-white text-xs mr-2">Turn Clockwise {" "}</p>
        <div className="flex-1">
          <input
          id='turnclock'
            type="text"
            placeholder="Enter Steps"
            className="p-1 rounded-md w-full text-xs border-none"
            value={steps}
            onChange={handleInputChange}
          />
          {/* {console.log("stepcheckx" + steps)} */}
        </div>
      </div>
    </div>
    );
  };

export default TurnClock
