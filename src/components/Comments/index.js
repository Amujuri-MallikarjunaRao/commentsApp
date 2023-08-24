// Write your code here

import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    name: '',
    comment: '',
    commentList: [],
  }

  toggleIsLiked = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  isDelete = id => {
    const {commentList} = this.state
    this.setState({
      commentList: commentList.filter(comment => comment.id !== id),
    })
  }

  stopDefault = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
    }

    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      name: '',
      comment: '',
    }))
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  render() {
    const {name, comment, commentList} = this.state
    const count = commentList.length
    return (
      <div className="intital-container">
        <div className="card-position">
          <h1>Comments</h1>
          <div className="mid-section">
            <form onSubmit={this.stopDefault} className="commentSection">
              <p>Say something about 4.0 Technologies</p>
              <input
                className="name"
                placeholder="Your Name"
                value={name}
                onChange={this.onChangeName}
              />
              <textarea
                className="comment"
                placeholder="Your Comment"
                value={comment}
                onChange={this.onChangeComment}
              >
                Your Comment
              </textarea>

              <button className="submit-button" type="submit">
                Add Comment
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="image"
            />
          </div>
          <hr />
          <ul className="lists-container">
            <li className="comment-count">
              <div className="count">
                <p>{count}</p>
              </div>
              <p>Comments</p>
            </li>
            {commentList.map(eachComment => (
              <CommentItem
                key={eachComment.id}
                commentDetails={eachComment}
                toggleIsLiked={this.toggleIsLiked}
                isDelete={this.isDelete}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Comments
