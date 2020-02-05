import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchPost } from '../actions'
import PagePost from '../components/PagePost'

class Post extends React.Component {
  componentDidMount () {
    this.props.onPostLoad(this.props.match.params.postId)
  }

  render () {
    console.log(this.props.posts)
    const post = this.props.posts[(this.props.match.params.postId - 1)]
    if (post) {
      return (
        <PagePost post={ post } />
      )
    } else {
      return (
        <p>Post loading...</p>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onPostLoad: postId => {
      dispatch(fetchPost(postId));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);