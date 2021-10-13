import React from "react"
import { Link } from "react-router-dom"
import "../nav/NavBar.css"
import logo from "../../images/nutshell_logo_bgyellow.png";
import { useHistory } from "react-router";


export const NavBar = () => {

const history = useHistory();  

  return (
    <nav className="nav__flex">
                <Link to="/">
                  <img className="logo" src={logo} alt="C51 Nutshell Logo" />
                </Link>
      <ul className="nav">
        <li className="nav__item">
          <Link className="nav__link" to="/articles">Articles</Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/friends">Friends</Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/messages">Messages</Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/tasks">Tasks</Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/events">Events</Link>
        </li>
        <li className="nav__item">
          <button className="nav__button" onClick={() => {
            sessionStorage.removeItem("nutshell_user");
            history.push("/login")
        }}>Logout</button>
        </li>
      </ul>
    </nav>
  )
}
