import { useState } from "react";
import "./App.css";
import {TaskCreator} from "./components/TaskCreator";

function App() {

  const [tasksItems, setTasksItems] = useState([
    {  name: 'Mi Tarea A', done:false },
    {  name: 'Mi Tarea B', done:false },
    {  name: 'Mi Tarea C', done:false },
    {  name: 'Mi Tarea D', done:false },
  ]);

  function createTask(taskName) {
    if (!tasksItems.find(task => task.name === taskName)) {
      setTasksItems([...tasksItems, { name: taskName, done: false }]);
    }
  }

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
