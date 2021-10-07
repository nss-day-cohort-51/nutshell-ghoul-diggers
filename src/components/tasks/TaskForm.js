import React, { useState } from "react";
import { useHistory } from "react-router";
import { addTask } from "./TaskManager";
import "./TaskForm.css"



export const TaskForm = () => {
    const [task, setTask] = useState({
        name: "",
        completeDate: ""
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
        const nameList = task.name
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
                            <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Task" value={task.name} />
                        </div>
                    </fieldset>
                    <h2 className="task__form--title">Due Date</h2>
                    <fieldset>
                        <div className="form-group">
                            <label htmlFor="name">Select Date: </label>
                            <input type="date" id="date" onChange={handleControlledInputChange} required autoFocus className="form-control" value={task.completeDate} />
                        </div>
                    </fieldset>
                    <button className="btn" onClick={handleClickSaveTask}>Save Task</button>
                </form>
            </div>
        </>
    )
}