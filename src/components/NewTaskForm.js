import React, { useState } from 'react';

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[0]);

  function handleSubmit(event) {
    event.preventDefault();
    onTaskFormSubmit({ text, category });
    setText("");
    setCategory(categories[0]);
  }

  function handleTextChange(event) {
    setText(event.target.value);
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text-input">Task:</label>
      <input 
        id="text-input" 
        type="text" 
        value={text} 
        onChange={handleTextChange} 
      />
      <label htmlFor="category-select">Category:</label>
      <select 
        id="category-select" 
        value={category} 
        onChange={handleCategoryChange}
      >
        {categories.slice(1).map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
      <button type="submit">Add task</button>
    </form>
  );
}

export default NewTaskForm;
