import React from "react";

function TodoEdit({ value, onChange, onAdd }) {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <input
        type="button"
        value="Dodaj"
        disabled={value.length === 0}
        onClick={() => onAdd()}
      />
    </div>
  );
}

export default TodoEdit;
