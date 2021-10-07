import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { TaskCard } from "./TaskCard";
import { deleteTask, getAllTasks } from "./TaskManager";



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

    useEffect(() => {
        getTasks();
    }, []);

    return (
        <section className="section-content">

            <div className="container-cards">
                <button type="button" className="btn" onClick={() => { history.push("/tasks/create") }}>+ Add Task</button>
                {tasks.map(task => <TaskCard key={task.id} task={task} handleDeleteTask={handleDeleteTask} />)}
            </div>
        </section>
    )
}