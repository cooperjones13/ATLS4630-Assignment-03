import "./TaskListItem.css"

type TaskListItemProps = {
    name: string;
    completed: boolean;
    idNum: number;
    toggleComplete: (idNum:number) => void;
    removeItemFromList: (idNum:number) => void;
}

export default function TaskListItem({name, completed, idNum, toggleComplete, removeItemFromList}:TaskListItemProps){
    return (
        <div className={`taskListItem ${completed && "completed"}`}>
            <input type="checkbox" className="itemCheckBox" checked={completed} onChange={()=>toggleComplete(idNum)}/>
            <span>{name}</span>
            <button className="removeButton" onClick={()=>removeItemFromList(idNum)}>Remove</button>
        </div>
    );
}