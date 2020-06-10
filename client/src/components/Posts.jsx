import React from 'react'
import { Link } from 'react-router-dom'
export default function Posts(props) {
 return (
  <div className="Posts">

   {props.posts && props.posts.map(post => (

    <Link to={`/post/${post.id}`} >
     <div>

      <p>{post.title}</p>
      <p>by: {post.user.username}</p>

     </div>

    </Link>



   ))
   }

  </div >
 )
}
