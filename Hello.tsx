import React from 'react';

export default ({ todos, changeIsCompleted }) => {
  return (
    <div>
      <h1>Todo!</h1>
      <ul>
        {todos &&
          todos.map((todo, index) => {
            var cdate = new Date(todo.createdOn).toLocaleTimeString();
            return (
              <li
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',

                  color: todo.isCompleted ? 'green' : 'red',
                }}
                onClick={() => changeIsCompleted(todo)}
                key={index}
              >
                <span
                  style={{
                    textDecoration: todo.isCompleted ? 'line-through' : '',
                  }}
                >
                  {todo.title}
                </span>
                <span>{cdate}</span>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
