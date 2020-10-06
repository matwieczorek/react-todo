import React, { useState } from "react";
import TodoEdit from "./TodoEdit";
import TodoList from "./TodoList";

function App() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const onClickAdd = () => {
    // zapytanie do backendu
    const newList = list.concat(value);
    setList(newList);
    setValue("");
  };
  const onClickDelete = (i) => {
    const newList = list.filter((v) => v !== i);
    setList(newList);
  };
  return (
    <div>
      <TodoEdit value={value} onChange={setValue} onAdd={onClickAdd} />
      <TodoList items={list} onDelete={onClickDelete} />
    </div>
  );
}

export default App;
