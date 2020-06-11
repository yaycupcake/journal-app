import React from 'react'
import { Route } from 'react-router-dom'
import Posts from '../Posts'
import Post from '../Post'
import Login from '../Login'
import NewPost from '../NewPost'

export default function Main(props) {
 return (
  <main>
   <Route exact path='/'>
    <Posts
     posts={props.posts}
    />
   </Route>
   <Route exact path='/post/:id'>
    <Post
     currentUser={props.currentUser}
    />
   </Route>
   <Route exact path='/login'>
    <Login
     handleLoginSubmit={props.handleLoginSubmit}
    />
   </Route>
   <Route exact path='/new-post'>
    <NewPost />
   </Route>
  </main>
 )
}
