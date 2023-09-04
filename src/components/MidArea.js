import React, { useRef, useState } from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { getComponent } from "./getComp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function MidArea({ droppedItems, setInputValues, handleDelete }) {
  const containerStyle = {
    backgroundColor: "#F0F0F0",
    padding: "20px",
    margin: "10px",
    borderRadius: "8px",
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.2), 0 2px 4px rgba(0, 0, 0, 0.1)",
    width: "300px", 
    minHeight: "200px",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
  };

  const buttonStyle = {
    backgroundColor: "green", 
    color: "white",
    padding: "4px 8px", 
    borderRadius: "4px",
    cursor: "pointer",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.1)",
    marginLeft: "8px", 
  };


  let newValues = [];

  const handleRunClick = () => {
    getInputValues();
    setInputValues(newValues);

    const executeComponentsSequentially = (index) => {
      if (index < droppedItems.length) {
        const item = droppedItems[index];
        getComponent(item.split("-")[0]);

        setTimeout(() => {
          executeComponentsSequentially(index + 1);
        }, 1000);
      }
    };
    executeComponentsSequentially(0);
  };

  function getInputValues() {
    var parentDiv = document.querySelector(".graybox");
    const inputElements = parentDiv.querySelectorAll(
      'input[type="text"], input[type="number"]'
    );

    var n = 0;
    inputElements.forEach(function (inputElement, index) {
      if (inputElement.type === "text") {
        if (inputElement.id == "repeat") {
          n = inputElement.value;
        }

        if (index > 1 && inputElements[index - 1].id == "repeat") {
          for (let i = 0; i < n; i++) {
            newValues.push({
              key: `${inputElement.id}${i}`,
              value: parseFloat(inputElement.value),
            });
          }
        } else if (!isNaN(inputElement.value)) {
          newValues.push({
            key: `${inputElement.id}${index}`,
            value: parseFloat(inputElement.value),
          });
        } else {
          newValues.push({
            key: `${inputElement.id}${index}`,
            value: inputElement.value,
          });
        }
      } else if (inputElement.type === "number") {
        newValues.push({
          key: `${inputElement.id}${index}`,
          value: parseFloat(inputElement.value),
        });
      }
    });
  }

  const deleteButtonStyle = {
    color: "red",
    cursor: "pointer",
    marginLeft: "auto", 
    display: "flex", 
    alignItems: "center", 
  };

  return (
    <div className="flex-1 h-full overflow-auto">
      <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-bold text-gray-700 ml-2 my-2">
        {" "}
        {"Midarea"}{" "}
      </div>

      <Droppable droppableId="midarea" type="sidearea">
        {(provided) => (
          <ul
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="midarea"
          >
            <div className="graybox" style={containerStyle}>
              <button style={buttonStyle} onClick={handleRunClick}>
                Run
              </button>
              {droppedItems.map((item, index) => (
                <Draggable key={item} draggableId={item} index={index}>
                  {(provided) => (
                    
                    <div className="dropped-item" style={{ display: "flex" }}>
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{ flex: 1 }}
                      >
                        {getComponent(item.split("-")[0])}
                      </div>
                      <span
                        style={deleteButtonStyle}
                        onClick={() => handleDelete(index)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </span>
                    </div>
                  )}
                </Draggable>
              ))}
            </div>
          </ul>
        )}
      </Droppable>
    </div>
  );
}
