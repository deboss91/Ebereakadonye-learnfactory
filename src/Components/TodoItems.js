import React from "react";
const TodoItems = props => {
  return (
    <ul>
      {props.individualItem.map((item, i) => (
        <li key={i}>
          {" "}
          {item}{" "}
          <button onClick={() => props.handleRemoveOneItem(item)}>
            remove
          </button>
        </li>
      ))}
    </ul>
  );
};
export default TodoItems;
