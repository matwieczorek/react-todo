import {
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import React from "react";

function TodoList({ items, onDelete }) {
  return (
    <>
      {items.length === 0 ? (
        "Lista jest pusta"
      ) : (
        <List>
          {items.map((item, index) => (
            <ListItem key={index}>
              <ListItemText>{item}</ListItemText>
              <ListItemSecondaryAction>
                <IconButton onClick={() => onDelete(item)}>
                  <Delete />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
}

export default TodoList;
