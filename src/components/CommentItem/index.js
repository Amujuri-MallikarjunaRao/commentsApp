// Write your code here
import './index.css'

const CommentItem = props => {
  const {eachComment} = props
  const {id, name, comment, isLiked} = eachComment
  const initial = name ? name[0].toUpperCase() : ''

  const like = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'

  const onClickLikeIcon = () => {
    const {toggleIsLiked} = props
    toggleIsLiked(id)
  }

  const onClickDeleteIcon = () => {
    const {isDelete} = props
    isDelete(id)
  }

  return (
    <li>
      <div>
        <div className="intial-letter">
          <p>{initial}</p>
        </div>
        <div>
          <div className="name-date">
            <p>{name}</p>
            <p> time ad date</p>
          </div>
          <p>{comment}</p>
        </div>
      </div>
      <div>
        <button onClick={onClickLikeIcon} type="button">
          <img src={like} alt="like" />
        </button>
        <button onClick={onClickDeleteIcon} type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png "
            alt="delete"
          />
          Like
        </button>
      </div>
    </li>
  )
}

export default CommentItem
