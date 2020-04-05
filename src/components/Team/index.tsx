// npm
import React, { Component } from 'react'

// self
import './index.scss'
import PlayerCard from './PlayerCard'
import players from './players'

export default class Team extends Component {
  render (): any {
    return (
      <div className='team-container'>
        <a href='#team' className='meet-the-team'>
          <h2>MEET THE TEAM</h2>
        </a>
        <div className='team'>
          {players.map(p => (
            <PlayerCard key={p.alias} player={p} />
          ))}
        </div>
      </div>
    )
  }
}
