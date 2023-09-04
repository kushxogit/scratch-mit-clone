import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";
import { DragDropContext } from "react-beautiful-dnd";
// import { getComponent } from "./components/getComp";
// import { comp } from "./components/compName";

export default function App() {
  const [droppedItems, setDroppedItems] = useState([]);
  const [inputValues, setInputValues] = useState([]);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    if (
      result.source.droppableId === "sidearea" &&
      result.destination.droppableId === "midarea"
    ) {
      const draggableId = result.draggableId.split("-")[0];
      const counter = droppedItems.filter((item) =>
        item.startsWith(draggableId)
      ).length;
      const updatedItem = `${draggableId}-${counter}`;
      const updatedItems = [...droppedItems, updatedItem];
      setDroppedItems(updatedItems);
    }
  };

  const handleDelete = (index) => {
    const updatedItems = [...droppedItems];
    updatedItems.splice(index, 1);
    setDroppedItems(updatedItems);
  };

  return (
    <div className="bg-blue-100 pt-6 font-sans">
      <div className="h-screen overflow-hidden flex flex-row  ">
        <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
          <DragDropContext onDragEnd={handleDragEnd}>
            <Sidebar />
            <MidArea
              droppedItems={droppedItems}
              setInputValues={setInputValues}
              handleDelete={handleDelete} 
            />
          </DragDropContext>
        </div>
        <div className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
          <PreviewArea inputValues={inputValues} />
        </div>
      </div>
    </div>
  );
}
