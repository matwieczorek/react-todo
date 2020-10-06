import { Button, TextField } from "@material-ui/core";
import React from "react";

function TodoEdit({ value, onChange, onAdd }) {
  return (
    <div>
      <TextField
      fullWidth
        label="Nazwa"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        variant="outlined"
        size="small"
      />
      <Button color="primary" variant="contained" disabled={value.length === 0} onClick={() => onAdd()}>
        Dodaj
      </Button>
    </div>
  );
}

export default TodoEdit;
