import React, { useEffect, useState } from "react";
import { TaskCard } from "./TaskCard";
import { getAllTasks } from "./TaskManager";



export const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    const getTasks = () => {
        return getAllTasks().then(tasksFromAPI => {
            setTasks(tasksFromAPI)
        });
    };

    useEffect(() => {
        getTasks();
    }, []);

    return (
        <section className="section-content">
            <div className="container-cards">
                {tasks.map(task => <TaskCard key={task.id} task={task} />)}
            </div>
        </section>
    )
}