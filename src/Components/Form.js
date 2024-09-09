import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
function Form({ addTodo }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addTodo({
        id: uuidv4(),
        text: inputValue,
        completed: false
      });
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new TODO"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default Form;
