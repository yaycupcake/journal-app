import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Posts(props) {
 const { getPostList } = props
 useEffect(() => {
  getPostList()
 }, [])

 return (
  <div className="Posts">

   {props.posts && props.posts.map((post, id) => (

    <Link
     className='post-link'
     to={`/post/${post.id}`}
     key={id}
    >
     <div className='post-card'>

      <h2>{post.title}</h2>
      <p>by: {post.user.username}</p>

     </div>

    </Link>



   ))
   }

  </div >
 )
}
