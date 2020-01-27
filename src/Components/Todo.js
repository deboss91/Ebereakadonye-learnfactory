import React, { Component } from "react";
// import HEader from "./Header";
import TodoItems from "./TodoItems";
import todoStyles from "../styles/todo.module.css";

class Todo extends Component {
  state = {
    todoItems: [],
    newTodo: ""
  };

  handleRemoveOneItem = itemToBeRemoved => {
    this.setState(prevState => ({
      todoItems: prevState.todoItems.filter(
        todoItem => todoItem !== itemToBeRemoved
      )
    }));
  };

  handleClearAllItem = itemToBeRemoved => {
    this.setState(prevState => ({
      todoItems: prevState.todoItems.filter(
        todoItem => todoItem === itemToBeRemoved
      )
    }));
  };

  // ... next, pass this function as
  // a 'prop' to the 'TodoItems' component you
  //  rendered in 'Todo.js' because also, that is where the 'remove button' lives.

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todoItems.length !== this.state.todoItems.length) {
      const jsonState = JSON.stringify(this.state.todoItems);
      localStorage.setItem("todoItems", jsonState);
    }
  }
  // componentDidMount() {
  //   const itemsFromLocalStorage = localStorage.getItem("todoItems");
  //   const todoItems = JSON.parse(itemsFromLocalStorage);
  //   this.setState(() => ({
  //     todoItems
  //   }));
  // }

  handleChange = e => {
    this.setState({ newTodo: e.target.value });
    // console.log(e.target.value);
  };

  handleSubmit = i => {
    i.preventDefault();
    this.setState(prevState => {
      //this if condition prevents empty input or we can use "REQUIRED, an input attribute"
      if (this.state.newTodo !== "")
        return {
          //this is done using concat method
          // todoItems: prevState.todoItems.concat(this.state.newTodo),
          //this is done using rest operator
          todoItems: [...prevState.todoItems, this.state.newTodo],
          newTodo: ""
        };
    });
    // document.querySelector("label").innerHTML = this.state.newTodo;
  };

  render() {
    return (
      <div id={todoStyles.main}>
        <h1 id={todoStyles.him}> Welcome to my Todo-App </h1>

        {/* below code takes my array and put it in an <li> each.  */}

        <br />
        <form>
          <label id="Label" htmlFor="" id={todoStyles.lab}>
            Todo Items
          </label>
          <br />
          <input
            type="text"
            value={this.state.newTodo}
            onChange={this.handleChange}
            // autoFocus="true"
            required
          />
          <button onClick={this.handleSubmit}>Submit</button>
          <button onClick={this.handleClearAllItem}> clear</button>
        </form>
        <TodoItems
          individualItem={this.state.todoItems}
          handleRemoveOneItem={this.handleRemoveOneItem}
        />
      </div>
    );
  }
}
export default Todo;
