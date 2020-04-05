// npm
import React, { Component } from 'react'

// self
import './index.scss'
import Logo from '../../assets/images/logo.png'
import socials from './socials'

// assets
import MouseSVG from '../../assets/images/mouse.svg'

export default class Hero extends Component {
  render (): any {
    return (
      <div className='hero'>
        <div className='logo'>
          <img src={Logo} alt='Union Collective Logo' />
        </div>
        <h3 className='slogan'>#WithThePack 🐺</h3>
        <div className='socials'>
          <ul>
            {socials.map((s) => (
              <a key={'social-link-' + s.icon.replace(' ', ' -')} href={s.link} target='_blank' rel='noopener noreferrer'>
                <li><i className={'large ' + s.icon + ' icon'} /></li>
              </a>
            ))}
          </ul>
        </div>
        <img src={MouseSVG} alt='Scroll Icon' className='mouse-scroll-icon' />
      </div>
    )
  }
}
