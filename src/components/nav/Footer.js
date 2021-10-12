import React from "react"
// import { Link } from "react-router-dom"
import "../nav/Footer.css"
// import logo from "../../images/nutshell_logo_bgyellow.png";

export const Footer = () => {

return (
    <>
    <footer>
            <div className="col1">
                <picture>
                  <img src={require(`../../images/nutshell_logo_bgyellow.png`).default} alt="Nutshell App Logo" className="footer__logo" />
                </picture>
            </div>
                
            <div className="col2">&copy; 2021 Nutshell</div>

            <div className="col3">

                <h4>Meet The Team</h4>

              <div className="team">

                  <div className="team__card">
                  <picture>
                    <img src={require(`../../images/susie.svg`).default} alt="Susie Stanley" className="" />
                  </picture>
                  <h6>Susie</h6>
                  </div>

                  <div className="team__card">
                  <picture>
                  <img src={require(`../../images/gerson.svg`).default} alt="Gerson" className="" />
                  </picture>
                  <h6>Gerson</h6>
                  </div>

                  <div className="team__card">
                  <picture>
                  <img src={require(`../../images/brady.svg`).default} alt="Brady Williams" className="" />
                  </picture>
                  <h6>Brady</h6>
                  </div>

                  <div className="team__card">
                  <picture>
                    <img src={require(`../../images/colby.svg`).default} alt="Colby Ryan" className="" /> 
                  </picture>
                  <h6>Colby</h6>
                  </div>
              </div>
            </div>
    </footer>
    </>
  )
}