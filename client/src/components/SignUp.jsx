import React, { Component } from 'react'

export default class SignUp extends Component {
 //still have to import and route this into main, note to self
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
  //may or may not have to edit this one, not sure yet
  e.preventDefault()
  this.props.handleRegisterSubmit(this.state)
  // history.push('/');
  this.setState({
   username: "",
   password: ""
  })
 }

 render() {
  return (
   <div>
    <h2>Sign Up</h2>
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
     <button>Sign Up</button>

    </form>
   </div>
  )
 }
}
