//Author: Brady Williams
//Purpose: Individual card for Friends
import { FaGithubSquare, FaEnvelope, FaTrash, FaLinkedin } from "react-icons/fa"
import userImage from "../../images/default.png"
import "./Friend.css"

export const FriendCard = ({ friend, handleDelete }) => {

  return (
    <div className="friend__list__flex">

      <div className="card__content--friend">

        <div className="friend__info">

            <div className="friend__info--image">
              {friend.user.image !== "" ?
                <img src={require(`../../images/${friend.user.image}`).default} alt={friend.user.name} /> 
                : <p>photo loading...</p>}
            </div>

            <div className="friend__info--name">

                <div className="friend__name--delete"><strong>
                  {friend.user.name}</strong>

                    <div className="icon">
                      <button type="button" className="friend__delete--btn" onClick={() => handleDelete(friend.id)}><FaTrash />
                      </button>
                    </div>

                </div>

            </div>
        
        </div>

        <div className="remove__item">

            <div className="icon"><a href="mailto:Brady@test.com"><FaEnvelope /></a>
            </div>

            <div className="icon">
            <a href="https://github.com/Slyydz" target="blank"><FaGithubSquare /></a>
            </div>

            <div className="icon">
            <a href="https://www.linkedin.com/in/brady-c-williams/" target="blank"><FaLinkedin /></a>
            </div>

        </div>

      </div>

    </div>
  )
}