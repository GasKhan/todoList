import React from 'react';

import Todo from './Todo';

export default function List(props) {
  const todoElems = props.todos.map((todo) => {
    return (
      <Todo
        key={todo.id}
        item={todo}
        checkHandler={props.checkHandler}
        deleteHandler={props.deleteHandler}
        changeHandler={props.changeHandler}
      />
    );
  });

  return <div className="list">{todoElems}</div>;
}
