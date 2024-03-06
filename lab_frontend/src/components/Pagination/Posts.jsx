import React from 'react'

function Posts({posts}) {
    console.log('pag', posts)
  return (
    <ul className='list_group'>
        {
            posts.map(post => (
                <li key={post._id}>{post.labName}</li>
            ))
        }
    </ul>
  )
}

export default Posts