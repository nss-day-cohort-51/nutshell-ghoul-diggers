import React from "react";
import "./TaskCard.css"


export const TaskCard = ({ task, handleDeleteTask }) => {
    return (
        <>
            <section className="task">
                <input type="checkbox" className="checkbox" />
                <label className="task__section">
                    <h3 className="task__section--title">{task.name}</h3>
                    <p className="task__section--complete-date">{task.completeDate}</p>
                </label>
                <button className="btn" onClick={() => handleDeleteTask(task.id)}>Remove Task</button>
            </section>
        </>
    )
}
