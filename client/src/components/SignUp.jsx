import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
class SignUp extends Component {
 state = {
  username: "",
  password: ""
 }

 handleChange = (e) => {
  const { name, value } = e.target;
  this.setState({
   [name]: value
  })
 }

 handleSubmit = (e) => {
  e.preventDefault()
  this.props.handleRegisterSubmit(this.state)
  this.setState({
   username: "",
   password: ""
  })
  this.props.history.push('/')
 }

 render() {
  return (
   <div className="SignUp">
    <h2>Sign Up</h2>
    <form
     onSubmit={this.handleSubmit}
     className="sign-up-form"
    >

     <input
      type="text"
      name="username"
      value={this.state.username}
      onChange={this.handleChange}
      placeholder="username"
     />
     <input
      type="password"
      name="password"
      value={this.state.password}
      onChange={this.handleChange}
      placeholder="password"
     />
     <button>GO</button>

    </form>
   </div>
  )
 }
}
export default withRouter(SignUp)