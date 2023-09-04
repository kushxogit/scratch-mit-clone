import React, { useState } from "react";
import CatSprite from "./CatSprite";
import Select from "react-select"; 

export default function PreviewArea({ inputValues }) {
  
  const [spriteOptions, setSpriteOptions] = useState([]);

  
  const [selectedSprite, setSelectedSprite] = useState("");


  const createSprite = () => {
    const newSpriteLabel = `Sprite ${spriteOptions.length + 1}`;
    const newSpriteValue = spriteOptions.length;
    const newSpriteOption = { label: newSpriteLabel, value: newSpriteValue };

    setSpriteOptions([...spriteOptions, newSpriteOption]);
  };


  const handleSpriteChange = (selectedOption) => {
    setSelectedSprite(selectedOption.value);
  };

  return (
    <div className="flex-1 h-full overflow-auto">
      <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-bold text-gray-700 ml-2 my-2">
        {" "}
        {"Preview Area"}{" "}
      </div>
      <div className="p-4">
        <div className="mb-4">
          <button onClick={createSprite} className="bg-blue-500 text-white px-4 py-2 rounded">
            Create Sprite
          </button>
        </div>
        <div className="mb-4">
          
          <Select
            options={spriteOptions}
            onChange={handleSpriteChange}
            value={spriteOptions.find((option) => option.value === selectedSprite)}
            isClearable={true}
          />
        </div>
        <div className="sprites">
        
          {spriteOptions.map((sprite, index) => (
            <div key={index} className="sprite">
              {index === selectedSprite ? (
                <CatSprite inputValues={inputValues} />
              ) : (
                <CatSprite />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
