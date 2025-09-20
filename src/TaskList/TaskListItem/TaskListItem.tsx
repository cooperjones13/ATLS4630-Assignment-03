import "./TaskListItem.css"

type TaskListItemProps = {
    name: string;
    completed: boolean;
}

export default function TaskListItem({name, completed}:TaskListItemProps){
    return (
        <div className={`taskListItem ${completed && "completed"}`}>
            <input type="checkbox" className="itemCheckBox" checked={completed}/>
            <span>{name}</span>
            <button className="removeButton">Remove</button>
        </div>
    );
}