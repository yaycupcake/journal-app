import React, { Component } from 'react'
import { getOnePost } from '../services/posts'
import { withRouter } from 'react-router-dom'
import { createComment } from '../services/comments'
import { Link } from 'react-router-dom'
class Post extends Component {

 state = {
  post: null,
  comment: ""
 }

 componentDidMount() {
  this.getPostData()
 }

 getPostData = async () => {
  const { id } = this.props.match.params
  const post = await getOnePost(id)
  this.setState({ post })
 }

 handleChange = (e) => {
  const { name, value } = e.target;
  this.setState({
   [name]: value
  })
 }

 handleSubmit = async (e) => {
  e.preventDefault()
  const { id } = this.props.match.params
  const commentData = this.state.comment

  await createComment(commentData, id)
  this.setState({ comment: "" })
 }

 render() {
  return (
   <div>

    {this.state.post
     ?
     <>
      <h2>{this.state.post.title}</h2>
      <p>by: {this.state.post.user.username}</p>

      <p>{this.state.post.content}</p>

      <Link to={`/post/${this.props.match.params.id}/edit`}>edit</Link>

      <hr />
      <h3>Comments:</h3>

      {this.state.post.comments.map((comment, id) => (
       <div key={id}>
        <p>{comment.user.username} says:</p>
        <p>{comment.content}</p>
       </div>
      ))}


      <form onSubmit={this.handleSubmit}>

       <textarea name="comment" onChange={this.handleChange} value={this.state.comment} />
       <button>Post Comment</button>

      </form>

      {/* change the form to show only if logged in */}
      {/* also break out this whole comment thing
      into its own component */}

     </>







     :
     <h2>Sorry, that post was not found.</h2>
    }


   </div>
  )
 }
}

export default withRouter(Post)