// Author: Colby Ryan
// Purpose: Displays a page that allows you to edit current tasks.

import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import { getTaskById, update } from "./TaskManager";



export const TaskEditForm = () => {
    const [task, setTask] = useState({ taskName: "", completeDate: "" })
    const [isLoading, setIsLoading] = useState(false);

    const { taskId } = useParams();
    const history = useHistory();

    const handleFieldChange = evt => {
        const stateToChange = { ...task };
        stateToChange[evt.target.id] = evt.target.value;
        setTask(stateToChange);
    };
    const updateExistingTask = evt => {
        evt.preventDefault()
        setIsLoading(true);

        const editedTask = {
            id: taskId,
            taskName: task.taskName,
            completeDate: task.completeDate,
            isCompleted: false,
            userId: task.userId
        };

        update(editedTask)
            .then(() => history.push("/tasks")
            )
    }
    useEffect(() => {
        getTaskById(taskId)
            .then(task => {
                setTask(task)
                setIsLoading(false);
            });
    }, []);

    return (
        <>
        <div className="form__flex">

            <form>

                <div className="form__title">Edit Event
                </div>

                <fieldset>

                    <div className="form__group">

                        <label htmlFor="taskName">Task Name</label>
                        <input
                            type="text"
                            required
                            className="form__group--edit"
                            onChange={handleFieldChange}
                            id="taskName"
                            value={task.name}
                        />

                        <label htmlFor="breed">Due Date</label>
                        <input
                            type="date"
                            required
                            className="form__group--edit"
                            onChange={handleFieldChange}
                            id="completeDate"
                        />

                    </div>

                </fieldset>


                <div className="form__btns">

                        <button
                            type="button" disabled={isLoading}
                            onClick={updateExistingTask}
                            className="form__btn">Submit
                        </button>

                        <button
                            type="button"
                            onClick={() => history.push(`/tasks`)}
                            className="form__btn">Cancel
                        </button>
                        
                </div>

            </form>

        </div>
        </>
    )
}