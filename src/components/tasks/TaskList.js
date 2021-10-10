// Author: Colby Ryan
// Purpose: To render all signed in users tasks.



import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { TaskCard } from "./TaskCard";
import { completeTask, deleteTask, getAllTasks } from "./TaskManager";



export const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const history = useHistory();

    const getTasks = () => {
        return getAllTasks().then(tasksFromAPI => {
            setTasks(tasksFromAPI)
        });
    };

    const handleDeleteTask = id => {
        deleteTask(id)
            .then(() => getAllTasks().then(setTasks));
    };

    const handleCompleteTask = id => {
        completeTask(id)
            .then(() => getAllTasks().then(setTasks));
    }

    useEffect(() => {
        getTasks();
    }, []);

    return (
        <section className="section-content">

            <div className="container-cards">
                <button type="button" className="btn" onClick={() => { history.push("/tasks/create") }}>+ Add Task</button>
                {tasks.map(task => task.isCompleted ? console.log('true') : <TaskCard key={task.id} task={task} handleDeleteTask={handleDeleteTask} handleCompleteTask={handleCompleteTask} />)}
            </div>
        </section>
    )
}