import React from 'react'
import Header from './Header'
import Nav from './Nav'
import Main from './Main'

export default function Layout(props) {
 return (
  <div className="Layout">
   <Header />
   <Nav
    currentUser={props.currentUser}
    handleLogout={props.handleLogout}
   />
   <Main
    posts={props.posts}
    currentUser={props.currentUser}
    handleLoginSubmit={props.handleLoginSubmit}
    handleRegisterSubmit={props.handleRegisterSubmit}
    getPostList={props.getPostList}
   />
  </div>
 )
}
