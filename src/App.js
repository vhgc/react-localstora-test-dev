import { useState, useEffect } from "react";
import "./App.css";
import {TaskCreator} from "./components/TaskCreator";

function App() {

  const [tasksItems, setTasksItems] = useState([]);

  function createTask(taskName) {
    if (!tasksItems.find(task => task.name === taskName)) {
      setTasksItems([...tasksItems, { name: taskName, done: false }]);
    }
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

      <table>
        <thead>
          <tr>
            <th> Tareas !!!!</th>
          </tr>
        </thead>
        <tbody>

          {
            tasksItems.map(task => (
              <tr key={task.name}>
                <td>
                  {task.name}
                </td>
              </tr>
            ))
          }

        </tbody>
      </table>

      

    </div>
  );
}

export default App;
