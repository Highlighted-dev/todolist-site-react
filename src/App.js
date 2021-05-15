import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

function App() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Nakaram kota',
            date: '15 maja 20:00',
        },
        {
            id: 2,
            text: 'Zapłać za prąd',
            date: '30 maja 20:00',
        },
        {
            id: 3,
            text: "Naucz się na matematykę",
            date: '16 maja 23:00',
        }
    ]);
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  };
  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}/> : 'There are no tasks' }
    </div>
  );
}

export default App;
