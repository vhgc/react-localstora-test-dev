import React from "react";
import { useState } from "react";

export const TaskCreator = ({createTask}) => {
  const [newTaskName, setNewTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(newTaskName);

    localStorage.setItem("tasks", newTaskName);
    setNewTaskName('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a new task!"
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)}
      />

      <button>Save Task</button>
    </form>
  );
};
