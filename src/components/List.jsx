import React from "react";
import Task from "./Task";
import { useDragAndDrop } from "@formkit/drag-and-drop/react";

const List = ({ name, tasks }) => {
  const [parent, tasksList] = useDragAndDrop(tasks, {
    group: "board",
    draggable: (el) => {
      return el.id !== "no-drag";
    },
  });
  return (
    <div ref={parent}>
      <h1 id="no-drag" className="list-handle">
        {name}
      </h1>
      {tasksList.map((task) => (
        <Task key={task.id} {...task} />
      ))}
    </div>
  );
};

export default List;
