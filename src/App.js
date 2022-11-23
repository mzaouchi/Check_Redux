import './App.css';
import AddTask from './Components/AddTask';
import TasksList from './Components/TasksList';

function App() {
  return (
    <div>
      <TasksList/>
      <AddTask/>
    </div>
  );
}

export default App;
