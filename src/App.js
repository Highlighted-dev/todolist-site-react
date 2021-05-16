import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState, useEffect } from 'react'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([]);

  //Get tasks from server
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer) 
    }
    getTasks()
  }, []);

  //Fetch data from server to json file
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();
    
    return data
  }

  //Delete task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: 'DELETE' })
    setTasks(tasks.filter((task) => task.id !== id))
  };

  //Add task
  const addTask = async(task) => {

    const res = await fetch(`http://localhost:5000/tasks/`, {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    })
    const data = await res.json()
    setTasks([...tasks,data]) 
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />

      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} /> : 'There are no tasks'}
      {showAddTask ? <AddTask onSave={addTask} /> : ''}
    </div>
  );
}

export default App;
