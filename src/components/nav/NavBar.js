import React from "react"
import { Link } from "react-router-dom"
import "../nav/NavBar.css"
import logo from "../../images/nutshell_logo_bgyellow.png";


export const NavBar = () => {
  return (
    <nav className="nav__flex">
      <img className="logo" src={logo} alt="C51 Nutshell Logo" />
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
      </ul>
    </nav>
  )
}
