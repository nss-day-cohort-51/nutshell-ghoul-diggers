import React from "react";
import "./TaskCard.css"


export const TaskCard = ({ task, handleDeleteTask, handleCompleteTask }) => {
    return (
        <>
            <section className="task">
                <input type="checkbox" className="checkbox" onClick={() => handleCompleteTask(task.id)} />
                <label className="task__section">
                    <h3 className="task__section--title">{task.taskName}</h3>
                    <p className="task__section--complete-date">Due Date: {task.completeDate}</p>
                </label>
                <button className="btn" onClick={() => handleDeleteTask(task.id)}>Remove Task</button>
            </section>
        </>
    )
}
