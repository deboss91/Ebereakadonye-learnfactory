import React from "react";
const TodoItems = props => {
  return (
    <h2>ebere</h2>
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
