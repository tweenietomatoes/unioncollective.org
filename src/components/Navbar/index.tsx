// npm
import React, { Component } from 'react'

// self
import './index.css'
import navItems from './items'

export default class Navbar extends Component {
  render (): any {
    return (
      <nav className='navbar'>
        <ul>
          {navItems.map((i) => (
            <a key={'nav-item-' + i.name} href={i.link}><li className='test'>{i.name}</li></a>
          ))}
        </ul>
      </nav>
    )
  }
}
