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
     <li>placeholder</li>
     <li>placeholder</li>
     <li>placeholder</li>
    </ul>
   </nav>
  </aside>
 )
}
