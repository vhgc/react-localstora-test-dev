import React from "react";

export const VisibilityControl = ({isChecked, callback, cleanTasks}) => {

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete?')) {
      cleanTasks();
    }
  };

  return (
    <div className="d-flex justify-content-between aligned-center bg-secondary text-white text-center py-2 px-4">
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          checked={isChecked}
          onChange={(e) => callback(e.target.checked)}
        />{" "}
      </div>
      <label>Show TaskDone!</label>
      <button onClick={handleDelete} className="btn btn-warning btn-sm px-2"> Clear!!!</button>
    </div>
  );
};
