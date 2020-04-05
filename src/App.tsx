// npm
import React, { Component } from 'react'

// self
import Hero from './components/Hero'
import Team from './components/Team'

export default class App extends Component {
  render (): any {
    return (
      <div className='container'>
        <Hero />
        <Team />
        <p className='copyright'>&copy; {new Date().getFullYear()} Union Collective</p>
      </div>
    )
  }
}
