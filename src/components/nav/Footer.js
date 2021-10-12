import React from "react"
import { Link } from "react-router-dom"
import "../nav/Footer.css"
import logo from "../../images/nutshell_logo_bgyellow.png";

export const Footer = () => {

return (
    <>
    <footer>
            <div class="col1">
                <picture>
                  <img src={require(`../src/images/nutshell_logo_bgyellow.png`).default} alt="Nutshell App Logo" className="customer__header--photo" />
                </picture>
            </div>
                
            <div class="col2"><p>&copy; 2021 Nutshell App Project</p></div>

            <div class="col3">

                <h4>Meet The Team</h4>

                <div className="team__photo">
                <picture>
                  <img src={require(`../../images/susie.svg`).default} alt="Susie Stanley" className="customer__header--photo"/>
                </picture>
                </div>

                <div className="team__photo">
                <picture>
                <img src={require(`../../images/gerson.svg`).default} alt="Gerson" className="customer__header--photo"/>
                </picture>
                </div>

                <div className="team__photo">
                <picture>
                <img src={require(`../../images/brady.svg`).default} alt="Brady Williams" className="customer__header--photo"/>
                </picture>
                </div>

                <div className="team__photo">
                <picture>
                  <img src={require(`../../images/colby.svg`).default} alt="Colby Ryan" className="customer__header--photo"/> 
                </picture>
                </div>
            </div>
    </footer>
    </>
  )
}