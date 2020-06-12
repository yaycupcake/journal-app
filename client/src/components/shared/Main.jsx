import React from 'react'
import { Route } from 'react-router-dom'
import Posts from '../Posts'
import Post from '../Post'
import Login from '../Login'
import NewPost from '../NewPost'
import EditPost from '../EditPost'
import SignUp from '../SignUp'

export default function Main(props) {

 return (
  <main className="Main">
   <Route exact path='/'>
    <Posts
     posts={props.posts}
     getPostList={props.getPostList}
    />
   </Route>
   <Route exact path='/post/:id'>
    <Post
     currentUser={props.currentUser}
    />
   </Route>
   <Route exact path='/post/:id/edit'>
    <EditPost
     currentUser={props.currentUser}
    />
   </Route>
   <Route exact path='/login'>
    <Login
     handleLoginSubmit={props.handleLoginSubmit}
    />
   </Route>
   <Route exact path='/sign-up'>
    <SignUp
     handleRegisterSubmit={props.handleRegisterSubmit}
    />
   </Route>
   <Route exact path='/new-post'>
    <NewPost />
   </Route>
  </main>
 )
}
