//Author: Brady Williams
//Purpose: Individual card for Friends

export const FriendCard = ({friend, handleDelete}) => {

    return(
        <div className="card">
        <div className="card__content">
          <h3 className="card__content--friend--name">Friend: <span>
            {friend.user.name}
          </span></h3>
          <p className="card__content--friend-email">Email: {friend.user.email}</p>
          <button className="card__content--friend-delete" onClick={() => handleDelete(friend.id)}>Delete</button>
        </div>
      </div>
    )
}