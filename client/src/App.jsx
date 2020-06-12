import React, { Component } from 'react'
import './App.scss'
import Layout from './components/shared/Layout'
import { getAllPosts } from './services/posts'
import { loginUser, registerUser, removeToken, verifyUser } from './services/auth'
import { withRouter } from 'react-router-dom'
class App extends Component {

 state = {
  posts: null,
  currentUser: null
 }

 componentDidMount() {
  this.handleVerify()
  this.getPostList()
 }

 getPostList = async () => {
  const posts = await getAllPosts()
  this.setState({ posts })
 }

 handleLoginSubmit = async (loginData) => {
  const currentUser = await loginUser(loginData)
  this.setState({ currentUser })
 }

 handleRegisterSubmit = async (registerData) => {
  const currentUser = await registerUser(registerData)
  this.setState({ currentUser })
 }

 handleLogout = () => {
  this.setState({
   currentUser: null
  })
  localStorage.clear()
  removeToken()
  this.props.history.push('/')
 }

 handleVerify = async () => {
  const currentUser = await verifyUser()
  this.setState({ currentUser })
 }


 render() {
  return (
   <>
    <Layout
     currentUser={this.state.currentUser}
     posts={this.state.posts}
     handleLoginSubmit={this.handleLoginSubmit}
     handleRegisterSubmit={this.handleRegisterSubmit}
     handleLogout={this.handleLogout}
     getPostList={this.getPostList}
    />
   </>
  )
 }
}

export default withRouter(App)