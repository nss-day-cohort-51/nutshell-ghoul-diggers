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
            isCompleted: false
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
            <form>
                <button type="button" className="btn" onClick={() => { history.push("/tasks") }}>Back</button>
                <fieldset>
                    <div className="formgrid">
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="taskName"
                            value={task.name}
                        />
                        <label htmlFor="taskName">Task Name</label>

                        <input
                            type="date"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="completeDate"
                        />
                        <label htmlFor="breed">Due Date</label>
                    </div>
                    <div className="alignRight">
                        <button
                            type="button" disabled={isLoading}
                            onClick={updateExistingTask}
                            className="btn"
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    )
}