import { useState, useEffect } from "react";
import "./App.css";
import { TaskCreator } from "./components/TaskCreator";
import { TaskTable } from "./components/TaskTable";

function App() {

  const [tasksItems, setTasksItems] = useState([]);

  function createTask(taskName) {
    if (!tasksItems.find(task => task.name === taskName)) {
      setTasksItems([...tasksItems, { name: taskName, done: false }]);
    }
  }

  const toggleTask = task => {
    setTasksItems(
      tasksItems.map(t => (t.name === task.name) ? {...t, done: !task.done}: t)
    );
  }

  useEffect(() => {
    // Verificando Localstorage
    const dataTask = localStorage.getItem('tasks');
    if (dataTask) {
      setTasksItems(JSON.parse(dataTask));
    }
  }, []);

  useEffect(() => {
    // Almacenando en Localstorage
    localStorage.setItem('tasks', JSON.stringify(tasksItems));
  }, [tasksItems]);

  return (
    <div className="App">
      <TaskCreator createTask={createTask} />
      <TaskTable tasks={tasksItems} toggleTask={toggleTask}/>

    </div>
  );
}

export default App;
