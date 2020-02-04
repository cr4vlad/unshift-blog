import React from 'react'
import { connect } from 'react-redux';
import LandingPost from '../components/LandingPost'
import { deletePost } from '../actions';

function Landing ({ posts, onDelete }) {
  if(!posts.length) {
    return (
      <div>
        No Posts
      </div>
    )
  }
  return (
    <div>
    {posts.map(post => {
      return (
        <LandingPost post={ post } onDelete={ onDelete } key={ post._id } />
      );
    })}
  </div>
  )
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDelete: id => {
      dispatch(deletePost(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);