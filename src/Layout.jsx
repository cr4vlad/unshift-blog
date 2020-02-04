import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

class Layout extends React.Component {
  render () {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default Layout
