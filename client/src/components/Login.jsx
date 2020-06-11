import React, { Component } from 'react'

export default class Login extends Component {

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
  // history.push('/');
  this.setState({
   username: "",
   password: ""
  })
 }

 render() {
  return (
   <div>
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
