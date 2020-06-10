import React, { Component } from 'react'
import { getOnePost } from '../services/posts'
import { withRouter } from 'react-router-dom'
import { createComment } from '../services/comments'
class Post extends Component {

 state = {
  post: null
 }

 componentDidMount() {
  this.getPostData()
 }

 getPostData = async () => {
  const { id } = this.props.match.params
  const post = await getOnePost(id)
  this.setState({ post })
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

      <hr />
      <h3>Comments:</h3>

      {this.state.post.comments.map((comment, id) => (
       <div key={id}>
        <p>{comment.user.username} says:</p>
        <p>{comment.content}</p>
       </div>
      ))}


      <form onSubmit={() => { }}>




      </form>




     </>







     :
     <h2>Sorry, that post was not found.</h2>
    }


   </div>
  )
 }
}

export default withRouter(Post)