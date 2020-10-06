import React from "react";

function TodoList({ items, onDelete }) {
  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <input type="button" value="Usuń" onClick={() => onDelete(item)} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
