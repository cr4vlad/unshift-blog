import React from 'react'
import { connect } from 'react-redux'
import { createPost } from '../actions'
import CreateForm from '../components/CreateForm'

class CreatePost extends React.Component {
  state = {
    title: '',
    body: ''
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.title.trim() && this.state.body.trim()) {
      this.props.onAddPost(this.state);
      this.handleReset();
    }
  };

  handleReset = () => {
    this.setState({
      title: '',
      body: ''
    });
  };

  render() {
    return (
      <CreateForm
        handleSubmit={ this.handleSubmit }
        handleInputChange={ this.handleInputChange }
        handleReset={ this.handleReset }
        title={ this.state.title }
        body={ this.state.body }
      />
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPost: post => {
      dispatch(createPost(post))
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CreatePost)