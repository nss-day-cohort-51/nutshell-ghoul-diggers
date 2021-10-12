// Author: Colby Ryan
// Purpose: To render all signed in users tasks.



import React, { useEffect, useState } from "react";
import { TaskCard } from "./TaskCard";
import { completeTask, deleteTask, getAllTasks } from "./TaskManager";
import { Link } from 'react-router-dom';
import "./Task.css"



export const TaskList = () => {
    const [tasks, setTasks] = useState([]);

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
        <div className="section__task">

            <div className="section__header">
            Tasks
            </div> 

            <div className="section__content">
                <Link to={`tasks/create`}>
                <button className="add__task">+ Add A Task</button></Link>
            </div>

            <div className="container">

                {/* ternary statement to show only uncompleted tasks */}
                {tasks.map(task => task.isCompleted ? 
                    console.log('true') 
                    : <TaskCard 
                        key={task.id} task={task} 
                        handleDeleteTask={handleDeleteTask} handleCompleteTask={handleCompleteTask} />)}

            </div>

        </div>
    )
}