import React from 'react'
import { string } from 'prop-types'

export default class Header extends React.Component {
  static propTypes = {
    title: string.isRequired
  }

  render () {
    const { title } = this.props
    return (
      <header className='hero is-light is-small'>
        <div className='hero-body'>
          <div className='container'>
            <h1 className='title has-text-info has-text-centered'>
              { title }
            </h1>
          </div>
        </div>
      </header>
    )
  }
}
