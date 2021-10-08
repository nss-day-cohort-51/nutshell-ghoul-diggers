// Author: Colby Ryan
// Purpose: To display the signed in users task.


import React from "react";
import { useHistory } from "react-router";
import "./TaskCard.css"


export const TaskCard = ({ task, handleDeleteTask, handleCompleteTask }) => {
    const history = useHistory();
    if (task.userId === parseInt(sessionStorage.getItem("nutshell_user"))) {
        return (
            <>
                <section className="task">
                    <input type="checkbox" className="checkbox" onClick={() => handleCompleteTask(task.id)} />
                    <label className="task__section">
                        <h3 className="task__section--title">{task.taskName}</h3>
                        <p className="task__section--complete-date">Due Date: {task.completeDate}</p>
                    </label>
                    <button className="btn" onClick={() => handleDeleteTask(task.id)}>Remove Task</button>
                    <button className="btn" type="button"
                        onClick={() => history.push(`/tasks/${task.id}/edit`)}>
                        Edit
                    </button>
                </section>
            </>
        )
    } else {
        return (
            null
        )
    }
}
