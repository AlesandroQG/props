import './App.css'
import {useState} from 'react';
import Task from './components/Task.jsx';
import AddTaskForm from './components/AddTaskForm.jsx';

const App = () => { 
    const [tasks, setTasks] = useState([
        { id: 1, text: 'Hacer la compra', completed: false },
        { id: 2, text: 'Llamar al médico', completed: true },
        { id: 3, text: 'Hacer ejercicio', completed: false }
    ]);
    const addTask = (text) => {
        const newId = tasks[tasks.length - 1].id;
        const newTask = { id: newId+1, text, completed: false };
        setTasks([...tasks, newTask]);
    };
    const deleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    }
    const toggleTask = (taskId) => {
        const result = tasks.map(task => {
            if (task.id === taskId) {
                task.completed = !task.completed;
            }
            return task;
        });
        setTasks(result);
    }
    return (
        <>
            <h1>Lista de tareas</h1>
            <AddTaskForm onAdd={addTask} />
            {tasks.map(task => (
                <Task key={task.id} task={task} onToggle={toggleTask} onDelete={deleteTask} />
            ))}
        </>
    );
};

export default App;