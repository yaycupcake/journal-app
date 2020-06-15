import React, { Component } from 'react'
import { getOnePost } from '../services/posts'
import { withRouter } from 'react-router-dom'
import { updatePost } from '../services/posts'
class EditPost extends Component {

 state = {
  post: null,
  title: '',
  content: ''
 }

 componentDidMount() {
  this.getPostData()
 }

 getPostData = async () => {
  const { id } = this.props.match.params
  const post = await getOnePost(id)
  this.setState({ post })
  this.setPostData(post)
 }

 setPostData = (post) => {
  this.setState({ title: post.title })
  this.setState({ content: post.content })
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
  console.log(id);

  const title = this.state.title
  const content = this.state.content
  const postData = { title: title, content: content }
  console.log(postData);

  await updatePost(id, postData)
  this.props.history.push(`/post/${id}`)
 }

 render() {
  return (
   <div className="EditPost">

    {this.state.post
     ?
     this.props.currentUser && this.props.currentUser.id === this.state.post.user.id
      ?
      <>
       <h2>Edit Post</h2>
       <form
        onSubmit={this.handleSubmit}
        className="edit-post-form"
       >
        <input
         type="text"
         name="title"
         value={this.state.title}
         onChange={this.handleChange}
        />
        <textarea
         name="content"
         value={this.state.content}
         onChange={this.handleChange}
        />
        <button>GO</button>
       </form>
      </>
      :
      <h2>You can't edit another user's post!</h2>
     // There shouldn't actually be a way to see this error
     // just from navigating the site normally
     // however it is there in case a user types in the URL.
     :
     <h2>Sorry, that post was not found.</h2>
    }

   </div>
  )
 }
}

export default withRouter(EditPost)