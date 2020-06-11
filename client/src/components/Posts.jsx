import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Posts(props) {
 const { getPostList } = props
 useEffect(() => {
  getPostList()
 })

 return (
  <div className="Posts">

   {props.posts && props.posts.map((post, id) => (

    <Link to={`/post/${post.id}`} key={id}>
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
