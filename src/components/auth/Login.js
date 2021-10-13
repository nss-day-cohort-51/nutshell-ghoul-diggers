import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom";
import "./Login.css"

export const Login = () => {
    const [loginUser, setLoginUser] = useState({ email: "" })
    const [existDialog, setExistDialog] = useState(false)

    const history = useHistory()

    const handleInputChange = (event) => {
        const newUser = { ...loginUser }
        newUser[event.target.id] = event.target.value
        setLoginUser(newUser)
    }


    const existingUserCheck = () => {
        // If your json-server URL is different, please change it below!
        return fetch(`http://localhost:8088/users?email=${loginUser.email}`)
            .then(res => res.json())
            .then(user => user.length ? user[0] : false)
    }

    const handleLogin = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then(exists => {
                if (exists) {
                    // The user id is saved under the key nutshell_user in session Storage. Change below if needed!
                    sessionStorage.setItem("nutshell_user", exists.id)
                    history.push("/")
                } else {
                    setExistDialog(true)
                }
            })
    }

    return (
        <main className="container--login">
            <dialog className="dialog dialog--auth" open={existDialog}>
                <div className="login__dialog">User does not exist</div>
                <button className="button--close" onClick={e => setExistDialog(false)}>Close</button>
            </dialog>
        
        <div classname="form__flex">
            <div className="form__flex__inner">
                <form className="form--login" onSubmit={handleLogin}>
                    <div className="form--login--headline">Welcome To Nutshell</div>
                    <div className="form--login--subtitle">Please Sign In</div>
                    <fieldset>

                        <label htmlFor="inputEmail"> Email address </label>
                        <input type="email"
                            id="email"
                            className="form__group--edit"
                            placeholder="Email address"
                            required autoFocus
                            value={loginUser.email}
                            onChange={handleInputChange} />

                        <div className="form__btns">
                            <button type="submit" className="login__btn">
                                Sign In
                            </button>
                        </div>

                    </fieldset>
                </form>
            </div>
        </div>
            <div className="link--register">
                <Link to="/register">Register for an account</Link>
            </div>
        </main>
    )
}
