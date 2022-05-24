import { useState } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import AddTodo from './components/AddTodo';
import List from './components/List';
import Bottom from './components/Bottom';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const percentageOfChecked =
    (100 / todos.length) * todos.filter((todo) => todo.isChecked).length;

  function addNewTodo() {
    if (newTodo !== '') {
      setTodos((prevTodo) => {
        const todo = {
          text: newTodo,
          id: nanoid(),
          isChecked: false,
        };
        setNewTodo('');
        return [...prevTodo, todo];
      });
    }
  }

  function createNewTodo(e) {
    const text = e.target.value;
    setNewTodo(text);
  }

  function checkTodo(id) {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (id === todo.id) return { ...todo, isChecked: !todo.isChecked };

        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  }

  function changeTodo(id, text) {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) return { ...todo, text };
        return todo;
      });
    });
  }

  function removeChecked() {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => !todo.isChecked);
    });
  }

  return (
    <div className="App">
      <h1 className="app__title">TODOLIST</h1>
      <AddTodo
        text={newTodo}
        inputHandler={createNewTodo}
        btnHandler={addNewTodo}
      />
      <List
        todos={todos}
        checkHandler={checkTodo}
        deleteHandler={deleteTodo}
        changeHandler={changeTodo}
      />
      <Bottom removeHandler={removeChecked} percentage={percentageOfChecked} />
    </div>
  );
}

export default App;
