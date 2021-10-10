// Author: Colby Ryan
// Purpose: Displays a form to add a new task to your task list.


import React, { useState } from "react";
import { useHistory } from "react-router";
import { addTask } from "./TaskManager";
import "./TaskForm.css"



export const TaskForm = () => {
    const [task, setTask] = useState({
        taskName: "",
        completeDate: 0,
        isCompleted: false,
        userId: parseInt(sessionStorage.getItem("nutshell_user"))
    });

    const history = useHistory();

    const handleControlledInputChange = (event) => {
        const newTask = { ...task }
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newTask[event.target.id] = selectedVal
        setTask(newTask)
    }
    const handleClickSaveTask = (event) => {
        event.preventDefault()
        const nameList = task.taskName
        const dateList = task.completeDate

        if (nameList === "" || dateList === "") {
            window.alert("Please fill in input fields")
        } else {
            addTask(task)
                .then(() => history.push("/tasks"))
        }
    }
    return (
        <>
            <div className="form">
                <button type="button" className="btn" onClick={() => { history.push("/tasks") }}>Back</button>
                <form className="task__form">
                    <h2 className="task__form--title">New Task</h2>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="name">Enter Task: </label>
                            <input type="text" id="taskName" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Task" value={task.name} />
                        </div>
                    </fieldset>
                    <h2 className="task__form--title">Due Date</h2>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="name">Select Date: </label>
                            <input type="date" id="completeDate" onChange={handleControlledInputChange} required autoFocus className="form-control" />
                        </div>
                    </fieldset>
                    <button className="btn" onClick={handleClickSaveTask}>Save Task</button>
                </form>
            </div>
        </>
    )
}