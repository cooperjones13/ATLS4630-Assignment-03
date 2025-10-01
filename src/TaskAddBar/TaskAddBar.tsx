import "./TaskAddBar.css"
import { useState } from "react"

type TaskAddBarProps = {
    addTask: (itemName:string) => void;
}

export default function TaskAddBar({addTask}:TaskAddBarProps){
    const [searchValue, setSearchValue] = useState("")

    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        addTask(searchValue);
        setSearchValue("");
    }
    return (
        <form onSubmit={handleSubmit} className="taskAddBar" >
            <input value={searchValue} type="text" className="taskInput" placeholder="Type your task here!" onChange={e => setSearchValue(e.target.value)}/>
            <button className="taskAddButton" type="submit">Add</button>
        </form>
    )
}