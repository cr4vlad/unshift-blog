import React from 'react'
import { Link } from 'react-router-dom'

export default function LandingPost (props) {
  const { id, title, body } = props.post
  return (
    <Link to={`/posts/${id}`}>
      <b>{ title }</b>
      <p>{ body }</p>
    </Link>
  )
}