import React from 'react'

export default function Nav(props) {
 return (
  <aside>
   <nav>
    <ul>
     <li>Welcome, {
      props.currentUser
       ?
       props.currentUser.username
       :
       'Guest'
     }</li>
     <li>{
      props.currentUser
       ?
       <Link to='/my-posts'>My Posts</Link>
       :
       <Link to='/login'>Login</Link>
     }</li>
     <li>{
      props.currentUser
       ?
       <Link>Logout</Link>
       // gotta fix this line later to actually logout
       :
       <Link to='/sign-up'>Sign Up</Link>
     }</li>
     <li>{
      props.currentUser
      &&
      <Link to='/preferences'>Preferences</Link>
     }</li>
     <li>{
      props.currentUser
      &&
      <Link to='/new-post'>New Post</Link>
     }</li>
    </ul>
   </nav>
  </aside>
 )
}
