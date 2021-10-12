// Author: Colby Ryan
// Purpose: Displays a form to add a new task to your task list.


import React, { useState } from "react";
import { useHistory } from "react-router";
import { addTask } from "./TaskManager";
import "./Task.css"



export const TaskForm = () => {
    const [task, setTask] = useState({
        taskName: "",
        completeDate: 0,
        isCompleted: false,
        userId: parseInt(sessionStorage.getItem("nutshell_user"))
    });

    const history = useHistory();

    const ResetForm = () => {
        setTask({
            taskName: "",
            completeDate: 0,
            isCompleted: false,
            userId: parseInt(sessionStorage.getItem("nutshell_user"))
        });
        console.log("resetForm invoked")
      }

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
            window.alert("Please fill out all required info")
        } else {
            addTask(task)
                .then(() => history.push("/tasks"))
        }
    }
    return (
        <>
        <div className="form__flex">

            <form>

                <div className="form__title">Add New Task
                </div>

                <fieldset>

                    <div className="form__group">

                        <label htmlFor="name">Enter Task: </label>

                        <input type="text" id="taskName" onChange={handleControlledInputChange} required autoFocus className="form__group--edit" placeholder="Task" value={task.name} />

                    </div>

                    <div className="form__group">

                        <label htmlFor="name">Select Date: </label>

                        <input type="date" id="completeDate" onChange={handleControlledInputChange} required className="form__group--edit" />

                    </div>

                </fieldset>

                <div className="form__btns">

                    <button className="form__btn" onClick={handleClickSaveTask}>Submit</button>

                    <button className="form__btn" onClick={ResetForm}>Reset Form</button>

                    <button type="button" className="form__btn" onClick={() => { history.push("/tasks") }}>Cancel</button>

                </div>

            </form>
                
        </div>
        </>
    )
}