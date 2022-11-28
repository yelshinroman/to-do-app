import { useState } from "react";
import ToDoInput from "./toDoInput/ToDoInput";
import ToDoList from "./toDoList/ToDoList";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    if (todo !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => {
      return todo !== text;
    });
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1>React Todo App</h1>
      <ToDoInput todo={todo} setTodo={setTodo} addTodo={addTodo} />
      <ToDoList list={todos} remove={deleteTodo} />
    </div>
  );
};

export default App;