import "./TaskAddBar.css"

export default function TaskAddBar(){
    return (
        <div className="taskAddBar">
            <input type="text" className="taskInput" placeholder="Type your task here!"/>
            <button className="taskAddButton">Add</button>
        </div>
    )
}