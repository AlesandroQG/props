import { useState } from "react";

function AddTaskForm({onAdd}) {
    const [newTask, setNewTask] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        // alert(`Elemento agregado: ${newTask}`);
        if (newTask.trim().length !== 0) {
            onAdd(newTask);
        }
        setNewTask("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Agregar nueva tarea" value={newTask} onChange={e => setNewTask(e.target.value)} required />
            <button type="submit">Agregar</button>
        </form>
    );
}

export default AddTaskForm;