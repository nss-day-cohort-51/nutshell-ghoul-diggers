//Author: Brady Williams
//Purpose: Individual card for Friends
import { FaGithubSquare, FaEnvelope, FaTrash, FaLinkedin } from "react-icons/fa"
import "./Friend.css"

export const FriendCard = ({ friend, handleDelete }) => {

  return (
    <div className="card">
      <div className="card__content">

        <div className="card__content--friend-section">
          <div className="card__content--image">
            <img src={require("../../images/default.png").default} alt="Profile Picture" />
          </div>
          <h3 className="card__content--friend--name"><span>
            {friend.user.name}
          </span></h3>
          <button className="card__content--friend-delete" onClick={() => handleDelete(friend.id)}><FaTrash /></button>
        </div>
        <div className="card__content--icon">
          <a href="mailto:Brady@test.com"><FaEnvelope /></a>
          <a href="https://github.com/Slyydz" target="blank"><FaGithubSquare /></a>
          <a href="https://www.linkedin.com/in/brady-c-williams/" target="blank"><FaLinkedin /></a>
        </div>
      </div>
    </div>
  )
}