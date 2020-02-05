import React from 'react'

export default function CreateForm (props) {
  return (
    <div>
      <form onSubmit={ props.handleSubmit }>
        <div className="form-group">
            <input
            type="text"
            placeholder="Title"
            className="form-control"
            name="title"
            onChange={ props.handleInputChange }
            value={ props.title }
          />
        </div>
        <div className="form-group">
          <textarea
            cols="19"
            rows="8"
            placeholder="Body"
            className="form-control"
            name="body"
            onChange={ props.handleInputChange }
            value={ props.body }>
          </textarea>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">Add Post</button>
          <button type="button" className="btn btn-warning" onClick={ props.handleReset }>
            Reset
          </button>
        </div>
      </form>
    </div>
  )
}