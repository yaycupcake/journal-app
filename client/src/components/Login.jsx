import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
class Login extends Component {

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
  this.props.handleLoginSubmit(this.state)
  this.setState({
   username: "",
   password: ""
  })
  this.props.history.push('/');
 }

 render() {
  return (
   <div className="Login">
    <h2>Login</h2>
    <form onSubmit={this.handleSubmit}>

     <input
      type="text"
      name="username"
      value={this.state.username}
      onChange={this.handleChange}
     />
     <input
      type="password"
      name="password"
      value={this.state.password}
      onChange={this.handleChange}
     />
     <button>Login</button>

    </form>
   </div>
  )
 }
}
export default withRouter(Login)