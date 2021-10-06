import React from "react";
import "./TaskCard.css"


export const TaskCard = ({ task }) => {
    return (
        <section className="task">
            <input type="checkbox" />
            <div className="task__section">
                <h3 className="task__section--title">{task.name}</h3>
                <p className="task__section--complete-date">{task.completeDate}</p>
            </div>
        </section>
    )
}
