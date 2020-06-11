import React, { Component } from 'react'
import { getOnePost } from '../services/posts'
import { withRouter } from 'react-router-dom'
import { updatePost } from '../services/posts'
class EditPost extends Component {

 //eventually need to add conditional logic
 //so that only the post creator can edit
 //and also on the post page that they
 //are the only one who can even click and see
 //the edit link to get to this page

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
 }

 render() {
  return (
   <div>


    {this.state.post
     ?
     this.props.currentUser.id === this.state.post.user.id
      ?
      <>
       <form onSubmit={this.handleSubmit}>
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
      <h2>You can't edit someone else's post!</h2>
     :
     <h2>Sorry, that post was not found.</h2>
    }


   </div>
  )
 }
}

export default withRouter(EditPost)