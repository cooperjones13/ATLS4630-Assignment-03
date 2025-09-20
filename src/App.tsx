import './App.css'
import TaskAddBar from './TaskAddBar/TaskAddBar'
import TaskList from './TaskList/TaskList'

const taskListItems = [
  {
    name: "Workout",
    completed: true,
    idNum: 0,
  }, 
  {
    name: "Grocery",
    completed: false,
    idNum: 1,
  },
  {
    name: "Take Meds",
    completed: false,
    idNum: 2,
  }, 
  {
    name: "Cook Dinner",
    completed: false,
    idNum: 3,
  }, 
  {
    name: "Walk The Dog",
    completed: false,
    idNum: 4,
  }, 
  {
    name: "Take Meds",
    completed: true,
    idNum: 5,
  }, 
]

export default function App() {

  return (
    <div className='app'>
      <header>
        <h1>TODO LIST</h1>
      </header>
      
      <main>
        <TaskAddBar/>
        <TaskList taskListItems={taskListItems}/>
      </main>


    </div>
  )
}