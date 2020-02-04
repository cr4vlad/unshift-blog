import { ADD_POST, DELETE_POST, FETCH_POST, UPDATE_POST, CREATE_COMMENT } from '../actions/types'

export default function postReducer(state = [], action) {
  switch (action.type) {
    case ADD_POST:
      return [...state, action.payload]
    case DELETE_POST:
      return state.filter(post => post.id !== action.payload.id)
    case FETCH_POST:
      return action.posts
    case UPDATE_POST:
      return state.map(post => { return post.id === action.payload.id ? Object.assign(post, action.payload) : post })
    case CREATE_COMMENT:
      if (state[action.payload.postId]) {
        state[action.payload.postId].comments = { ...state[action.payload.postId].comments, action }
      } else {
        console.log(`No post with id = ${action.payload.postId}`)
      }
      return state
    default:
      return state
  }
}