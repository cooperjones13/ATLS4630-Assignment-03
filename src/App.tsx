import './App.css'
import { useState } from 'react'
import TaskAddBar from './TaskAddBar/TaskAddBar'
import TaskList from './TaskList/TaskList'

export type ListItemData = {
  name: string,
  completed: boolean,
  idNum: number
}

const taskListItemsDefault : ListItemData[] = [
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
    name: "Brush Teeth",
    completed: true,
    idNum: 5,
  }, 
]

export default function App() {

  const [taskListItems, setTaskListItems] = useState(taskListItemsDefault)

  function addItemToList(itemName: string) {
    const newId = taskListItems.length > 0 ?
      Math.max(...taskListItems.map(item => item.idNum)) + 1 :
      0;
    setTaskListItems([...taskListItems, { name: itemName, idNum: newId, completed: false}]);
  }

  function removeItemFromList(idNum: number) {
    setTaskListItems(taskListItems.filter(item => item.idNum !== idNum));
  }

  function toggleComplete(idNum: number){
    const tempTaskItem = taskListItems.find(item => item.idNum === idNum);
    const newId = taskListItems.length > 0 ?
      Math.max(...taskListItems.map(item => item.idNum)) + 1 :
      0;
    if(tempTaskItem){
      setTaskListItems([...taskListItems.filter(item => item.idNum !== idNum), { name: tempTaskItem.name, idNum: newId, completed: !tempTaskItem.completed}]);
    } else {
      console.log("tempTaskItem Undefined")
    }
  }

  return (
    <div className='app'>
      <header>
        <h1>TODO LIST</h1>
      </header>
      
      <main>
        <TaskAddBar addTask={addItemToList}/>
        <TaskList taskListItems={taskListItems} toggleComplete={toggleComplete} removeItemFromList={removeItemFromList}/>
      </main>


    </div>
  )
}