function Task({task, onToggle, onDelete}) {
    return (
        <div>
            <span onClick={() => onToggle(task.id)} className={task.completed ? "completed" : ""}>{task.text}</span>
            <button onClick={() => onDelete(task.id)}>Eliminar</button>
        </div>
    );
}

export default Task;