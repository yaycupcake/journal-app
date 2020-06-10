import React from 'react'
import { Route } from 'react-router-dom'
import Posts from '../Posts'
import Post from '../Post'

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
    <Post />
   </Route>
  </main>
 )
}
