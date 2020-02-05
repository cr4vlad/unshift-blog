import React from 'react'
import { Link } from 'react-router-dom'

export default function PagePost (props) {
  const { post } = props
  return (
    <>
      <h2>{ post.title }</h2>

      <Link to={`/posts/${post.id}/update`}>
        <i class="far fa-edit"></i>
      </Link>

      <i class="far fa-trash-alt"></i>

      <p>{ post.body }</p>

      <h3>Comments</h3>

      <i class="far fa-plus-square"></i>

      <div>
        {post.comments && post.comments.map(comment => {
          return (
            <p key={comment.id}>{comment.body}</p>
          )
        })}
      </div>
    </>
  )
}