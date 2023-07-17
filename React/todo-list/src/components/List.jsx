import React, { useState } from 'react';

const Task = ({ task, toggleTask, removeTask }) => {
    return (
        <div style={{ textDecoration: task.completed ? 'line-through' : '' }}>
            <input type="checkbox" checked={task.completed} onChange={toggleTask} />
            {task.text}
            <button onClick={removeTask}>Delete</button>
        </div>
    );
};

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        setTasks([...tasks, { text: newTask, completed: false }]);
        setNewTask('');
    };

    const toggleTask = (index) => {
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
    };

    const removeTask = (index) => {
        const newTasks = tasks.filter((task, i) => i !== index);
        setTasks(newTasks);
    };

    return (
        <div>
            {tasks.map((task, index) => (
                <Task
                    key={index}
                    task={task}
                    toggleTask={() => toggleTask(index)}
                    removeTask={() => removeTask(index)}
                />
            ))}
            <input
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="New task"
            />
            <button onClick={addTask}>Add task</button>
        </div>
    );
};

export default TaskList;
