import "./TaskList.css"
import TaskListItem from "./TaskListItem/TaskListItem"
import type { ListItemData } from "../App"

type TaskListProps = {
    taskListItems : ListItemData[];
    toggleComplete: (idNum:number) => void;
    removeItemFromList: (idNum:number) => void;
}

export default function TaskList({taskListItems, toggleComplete, removeItemFromList}:TaskListProps){
    return (
        <div className="taskList">
            {taskListItems.length?
            taskListItems.sort((a, b) => {
                if (a.name > b.name) return 1;
                if (a.name < b.name) return -1;
                return 0;
            }).map( taskItem =>
                <TaskListItem name={taskItem.name} completed={taskItem.completed} key={taskItem.idNum} idNum= {taskItem.idNum}toggleComplete={toggleComplete} removeItemFromList={removeItemFromList}/>
            ):
            "No Tasks Found"
            }
        </div>
    )
}