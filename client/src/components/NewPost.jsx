import React, { Component } from 'react'
import { createPost } from '../services/posts'
import { withRouter } from 'react-router-dom'

class NewPost extends Component {
 state = {
  title: '',
  content: ''
 }

 handleChange = (e) => {
  const { name, value } = e.target;
  this.setState({
   [name]: value
  })
 }

 handleSubmit = async (e) => {
  e.preventDefault()
  const title = this.state.title
  const content = this.state.content
  const postData = { title: title, content: content }
  await createPost(postData)
  this.setState({ title: "" })
  this.setState({ content: "" })
  this.props.history.push('/')
 }

 render() {
  return (
   this.props.currentUser ?
    < div className="NewPost" >
     <h2>New Post</h2>
     <form
      onSubmit={this.handleSubmit}
      className="new-post-form"
     >

      <input
       type="text"
       name="title"
       onChange={this.handleChange}
       value={this.state.title}
      />
      <textarea
       name="content"
       onChange={this.handleChange}
       value={this.state.content}
      />
      <button>GO</button>

     </form>

    </div >
    :
    <h2>Please login or sign up first!</h2>
  )
 }
}

export default withRouter(NewPost)