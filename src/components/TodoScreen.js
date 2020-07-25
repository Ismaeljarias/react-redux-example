import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoAction, deleteTodoAction } from "../redux/todoDuck";

const TodoScreen = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.todoData);

  const [todos, setTodos] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setTodos(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todos.trim() !== "") {
      dispatch(addTodoAction(todos));
      setTodos("");
    }
  };

  const deleteTodo = (id) => {
    dispatch(deleteTodoAction(id));
  };

  return (
    <div>
      <h1>All Todos: </h1>
      <hr />

      <h2>Add Todo: {state.length}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="todos"
          value={todos}
          placeholder="Add Todo"
          onChange={handleInputChange}
        />
        <button type="submit">Add Todo</button>
      </form>
      <br />
      <br />
      <hr />

      <ul>
        {state.map((item) => (
          <li onClick={() => deleteTodo(item.id)} key={item.id}>
            {item.todo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoScreen;
