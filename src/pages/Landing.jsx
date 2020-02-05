import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import LandingPost from '../components/LandingPost'

function Landing ({posts}) {
  if(!posts.length) {
    return (
      <div>
        No Posts
      </div>
    )
  }
  return (
    <>
      <h2>Posts</h2>

      <Link to='/create'>
        <i class="far fa-plus-square"></i>
      </Link>

      <div>
        {posts.map(post => {
          return (
            <LandingPost post={ post } key={ post.id } />
          )
        })}
      </div>
    </>
  )
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(
  mapStateToProps,
  null
)(Landing);