import "./TaskList.css"
import TaskListItem from "./TaskListItem/TaskListItem"

type TaskListProps = {
    taskListItems : {name: string, completed:boolean, idNum: number}[]
}

export default function TaskList({taskListItems}:TaskListProps){
    return (
        <div className="taskList">
            {taskListItems.map( taskItem =>
                <TaskListItem name={taskItem.name} completed={taskItem.completed} key={taskItem.idNum}/>
            )}
        </div>
    )
}