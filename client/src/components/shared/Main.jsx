import React from 'react'
import { Route } from 'react-router-dom'
import Posts from '../Posts'
import Post from '../Post'
import Login from '../Login'

export default function Main(props) {
 return (
  <main>
   <p>PLACEHOLDER TEXT HERE</p>
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
  </main>
 )
}
