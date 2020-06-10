import React from 'react'
import Header from './Header'
import Nav from './Nav'
import Main from './Main'

export default function Layout(props) {
 return (
  <div>
   <Header />
   <Nav />
   <Main
    posts={props.posts}
   />
  </div>
 )
}
