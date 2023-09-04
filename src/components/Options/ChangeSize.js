import React, { useState } from 'react'
const ChangeSize = ({}) => {

  


  const [steps, setSteps] = useState(0);
  
  const parentContainerStyle = {
    maxWidth: '200px',
    margin: '10px',
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    // Use a regular expression to check if it's a valid integer or a valid negative integer
    if (/^-?\d+$/.test(inputValue)) {
      setSteps(inputValue);
    } else {
      setSteps(0);
    }
  };
  

  return (
    <div style={parentContainerStyle}>
      <div className="bg-purple-700 rounded-md p-1 flex items-center"
>
        <p className="text-white text-xs mr-2">Change Size to {" "}</p>
        <div className="flex-1">
          <input
          id='changesize'
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

export default ChangeSize
