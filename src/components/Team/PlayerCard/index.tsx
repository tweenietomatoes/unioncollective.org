// npm
import React, { Component } from 'react'

// self
import './index.scss'
import { Player } from '../players'

// flag images
import UKFlag from '../../../assets/images/flags/uk.png'
import DEFlag from '../../../assets/images/flags/de.png'
import USFlag from '../../../assets/images/flags/us.png'

export interface IPlayerCardProps {
  player: Player
}

export default class PlayerCard extends Component<IPlayerCardProps> {
  render (): any {
    const player = this.props.player
    const countries: { [c: string]: { name: string, flag: any } } = {
      uk: {
        name: 'United Kingdom',
        flag: UKFlag
      },
      de: {
        name: 'Denmark',
        flag: DEFlag
      },
      us: {
        name: 'United States',
        flag: USFlag
      }
    }

    return (
      <div className='player-card'>
        <div className='content'>
          <img className='avatar' src={player.image} alt={player.alias + ' avatar'} />
          <h2 className='alias'>
            <img className='flag' src={countries[player.country].flag} alt={countries[player.country].name + ' flag'} />
            {player.alias}
          </h2>

          <div className='details'>
            <ul>
              <li><span className='header'>Name:</span> {player.name}</li>
              <li><span className='header'>Country:</span> {countries[player.country].name}</li>
              <li><span className='header'>Roles:</span> {player.roles.join(', ')}</li>
            </ul>
          </div>

          <div className='socials'>
            <ul>
              {player.socials.map((s) => (
                <a key={'social-link-' + s.icon.replace(' ', ' -')} href={s.link} target='_blank' rel='noopener noreferrer'>
                  <li><i className={'large ' + s.icon + ' icon'} /></li>
                </a>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
