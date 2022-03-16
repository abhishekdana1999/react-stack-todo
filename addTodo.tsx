import React, { useState } from 'react';

export default ({ addTodo }) => {
  const [title , setTitle] = useState('');
  return (
    <div>
      <input
        type="text"
        onChange={(event) => (setTitle(event.target.value))}
        value={title}
      />
      <button onClick={() => addTodo(title)}>Add Todo</button>
    </div>
  );
};
