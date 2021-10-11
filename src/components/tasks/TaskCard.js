// Author: Colby Ryan
// Purpose: To display the signed in users task.


import React from "react";
import "./Task.css"
import { Link } from "react-router-dom";
import {FaEdit, FaTrash } from "react-icons/fa"


export const TaskCard = ({ task, handleDeleteTask, handleCompleteTask }) => {

    if (task.userId === parseInt(sessionStorage.getItem("nutshell_user"))) {
        return (
            <>
                <div className="card__content--task">

                    <div className="task__info">

                            <label className="task__section">
                                <div className="task__title"><strong>{task.taskName}</strong></div>
                                <div><strong>Due Date: </strong> {task.completeDate}</div>
                            </label>

                    </div>

                    <div className="task__btns">
                        <div className="task__complete">
                        <input type="checkbox" className="checkbox" onClick={() => handleCompleteTask(task.id)} />
                        <label>Complete </label>
                        </div>

                        <div className="task__edit__btns">
                        <Link to={`/tasks/${task?.id}/edit`}><button className="button sm"><FaEdit/></button></Link>

                        <button type="button" className="button sm" onClick={() => handleDeleteTask(task?.id)}><FaTrash /></button>
                        </div>
                    </div>

                </div>
            </>
        )
    } else {
        return (
            null
        )
    }
}
