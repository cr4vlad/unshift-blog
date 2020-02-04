import { ADD_POST, DELETE_POST, FETCH_POST, UPDATE_POST, CREATE_COMMENT } from './types'
import axios from 'axios'

const URL = 'https://bloggy-api.herokuapp.com'

export const createPostSuccess =  (data) => {
  return {
    type: ADD_POST,
    payload: {
      id: data.id,
      title: data.title,
      body: data.body
    }
  }
}

export const createPost = ({ title, body }) => {
  return (dispatch) => {
    return axios.post(`${URL}/posts`, {title, body})
      .then(res => {
        dispatch(createPostSuccess(res.data))
      })
      .catch(error => {
        throw(error)
      })
  }
}

export const deletePostSuccess = id => {
  return {
    type: DELETE_POST,
    payload: {
      id
    }
  }
}

export const deletePost = id => {
  return (dispatch) => {
    return axios.delete(`${URL}/posts/${id}`).then(res => {
      dispatch(deletePostSuccess(res.data))
    })
    .catch(error => {
      throw(error)
    })
  }
}

export const fetchPosts = (posts) => {
  return {
    type: FETCH_POST,
    posts
  }
}

export const fetchAllPosts = () => {
  return (dispatch) => {
    return axios.get(`${URL}/posts`)
      .then(res => {
        dispatch(fetchPosts(res.data))
      })
      .catch(error => {
        throw(error)
      })
  }
}

export const changePost = (data) => {
  return {
    type: UPDATE_POST,
    payload: {
      id: data.id,
      title: data.title,
      body: data.body,
      comments: data.comments
    }
  }
}

export const fetchPost = id => {
  return (dispatch) => {
    return axios.get(`${URL}/posts/${id}_embed=comments`)
      .then(res => {
        dispatch(changePost(res.data))
      })
      .catch(error => {
        throw(error)
      })
  }
}

export const updatePost = (id, title, body) => {
  return (dispatch) => {
    return axios.put(`${URL}/posts/${id}`, {
      title: title,
      body: body
    }).then(res => {
      console.log(res)
      dispatch(changePost({
        id: id,
        title: title,
        body: body
      }))
    })
    .catch(error => {
      throw(error)
    })
  }
}

export const addComment = (data) => {
  return {
    type: CREATE_COMMENT,
    payload: {
      postId: data.postId,
      body: data.body
    }
  }
}

export const createComment = (postId, body) => {
  return (dispatch) => {
    return axios.post(`${URL}/comments`, {
      postId: postId,
      body: body
    }).then(res => {
      console.log(res)
      dispatch(addComment({
        postId: postId,
        body: body
      }))
    })
    .catch(error => {
      throw(error)
    })
  }
}