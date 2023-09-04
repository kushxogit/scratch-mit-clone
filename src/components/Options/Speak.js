import React, { useState } from 'react'
const Speak = ({}) => {

  


  const [steps, setSteps] = useState("");
  
  const parentContainerStyle = {
    maxWidth: '200px',
    margin: '10px',
  };

  const handleInputChange = (e) => {
    setSteps(e.target.value);
  };

  return (
    <div style={parentContainerStyle}>
      <div className="bg-purple-700 rounded-md p-1 flex items-center"
>
        <p className="text-white text-xs mr-2">Speak {" "}</p>
        <div className="flex-1">
          <input
          id='speak'
            type="text"
            placeholder="Enter Message"
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

export default Speak
