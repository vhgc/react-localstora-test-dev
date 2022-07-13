import { useState, useEffect } from "react";
import "./App.css";
import { TaskCreator } from "./components/TaskCreator";
import { TaskTable } from "./components/TaskTable";
import { VisibilityControl } from "./components/VisibilityControl";

function App() {

  const [tasksItems, setTasksItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

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


  const cleanTasks = () => {
    setTasksItems(tasksItems.filter((task) => !task.done));
    setShowCompleted(false);
  };

  return (
    <main className="bg-dark vh-100 text-white">
      <div className="container p-4 col-md-4 offset-md-4">
        <TaskCreator createTask={createTask} />
        <TaskTable tasks={tasksItems} toggleTask={toggleTask} />

        <VisibilityControl 
          isChecked={showCompleted}
          callback={(cheked) => setShowCompleted(cheked)}
          cleanTasks={cleanTasks}
        />

        {
          showCompleted === true && (
            <TaskTable tasks={tasksItems} toggleTask={toggleTask} showCompleted={showCompleted} />
          )
        }
      </div>

    </main>
  );
}

export default App;
