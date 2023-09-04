import React from "react";
import Icon from "./Icon";
import { Draggable } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";
import { getComponent } from "./getComp";
import { comp } from "./compName";

export default function Sidebar() {
  return (
    <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
      <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-bold text-gray-700 mr-2 mb-2">
        {" "}
        {"Sidebar"}{" "}
      </div>

      <Droppable droppableId="sidearea" type="sidearea">
        {(provided) => (
          <ul
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="sidearea my-3"
          >
            {comp.map((item, index) => {
              return (
                <Draggable
                  key={`${item}-sideArea`}
                  draggableId={`${item}-sideArea`}
                  index={index}
                >
                  {(provided) => (
                    <ul
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {getComponent(item)}
                    </ul>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </div>
  );
}
