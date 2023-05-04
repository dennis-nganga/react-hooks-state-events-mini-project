import React from 'react';

function Task({ task, onDeleteTask }) {
  const { text, category } = task;

  function handleClick() {
    onDeleteTask(task);
  }

  return (
    <div className="task">
      <div className="label">{text}</div>
      <div className="category">{category}</div>
      <button className="delete" onClick={handleClick}>X</button>
    </div>
  );
}

export default Task;

