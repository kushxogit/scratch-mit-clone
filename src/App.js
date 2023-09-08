import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";
import { DragDropContext } from "react-beautiful-dnd";

export default function App() {
  const [containers, setContainers] = useState([
    {
      id: "container-1",
      items: [],
    },
  ]);

  const [inputValues, setInputValues] = useState([]);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const sourceContainerId = result.source.droppableId;
    const destinationContainerId = result.destination.droppableId;
    const draggableId = result.draggableId.split("-")[0];

    const updatedContainers = containers.map((container) => {
      if (container.id === destinationContainerId) {
        return {
          ...container,
          items: [
            ...container.items,
            `${draggableId}-${container.items.length}`,
          ],
        };
      }
      return container;
    });

    setContainers(updatedContainers);
  };

  const handleDelete = (containerId, index) => {
    const container = containers.find((c) => c.id === containerId);

    if (container && container.items.length > index) {
      container.items.splice(index, 1);
      setContainers([...containers]);
    }
  };

  return (
    <div className="bg-blue-100 pt-6 font-sans">
      <div className="h-screen overflow-hidden flex flex-row  ">
        <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
          <DragDropContext onDragEnd={handleDragEnd}>
            <Sidebar />
            <MidArea
              containers={containers}
              setContainers={setContainers}
              handleDelete={handleDelete}
              setInputValues={setInputValues}
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
