import "./App.css";
import React from "react";
import { useDragAndDrop } from "@formkit/drag-and-drop/react";
import { animations } from "@formkit/drag-and-drop";
import List from "./components/List";

const dataDict = {
  board: {
    lists: [
      {
        name: "first list",
        id: "listId1",
        tasks: [
          { id: "listId1 11", name: "1 one" },
          { id: "listId1 12", name: "1 two" },
          { id: "listId1 13", name: "1 three" },
        ],
      },
      {
        name: "second list",
        id: "listId2",
        tasks: [
          { id: "listId2 21", name: "2 one" },
          { id: "listId2 22", name: "2 two" },
          { id: "listId2 23", name: "2 three" },
        ],
      },
      {
        name: "third list",
        id: "listId3",
        tasks: [
          { id: "listId3 31", name: "3 one" },
          { id: "listId3 32", name: "3 two" },
          { id: "listId3 33", name: "3 three" },
        ],
      },
    ],
  },
};

function App() {
  const [parent, lists] = useDragAndDrop(dataDict.board.lists, {
    plugins: [animations()],
    dragHandle: ".list-handle",
  });
  const style = { display: "flex", gap: "30px", margin: "auto" };
  return (
    <div ref={parent} style={style}>
      {lists.map((list, _index) => {
        return <List key={list.id} data-label={list.id} {...list} />;
      })}
    </div>
  );
}

export default App;
