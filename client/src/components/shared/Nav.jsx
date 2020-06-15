import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav(props) {
 return (
  <aside className="Nav">
   <nav>
    <ul>
     <li>Welcome, {
      props.currentUser
       ?
       props.currentUser.username
       :
       'Guest'
     }</li>
     {
      props.currentUser
       ?
       <>
        <li><Link to='#' onClick={props.handleLogout}>Logout</Link></li>
        <li><Link to='/new-post'>New Post</Link></li>
       </>
       :
       <>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/sign-up'>Sign Up</Link></li>
       </>
     }
    </ul>
   </nav>
  </aside>
 )
}
