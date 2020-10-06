import React, { useState } from "react";
import TodoEdit from "./TodoEdit";
import TodoList from "./TodoList";
import {
  Grid,
  Paper,
} from "@material-ui/core";
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
    <Grid container style={{marginTop: 50}}>
      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
        <Paper style={{padding: 8}}>
          <TodoEdit value={value} onChange={setValue} onAdd={onClickAdd} />
          <TodoList items={list} onDelete={onClickDelete} />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default App;
