import React from 'react'

import SocialIconLink from '../SocialIcons'
import social_icons from '../SocialIcons/social-icons.yml'

import logo from '../../images/logo_sm.png'

const Header = () => (
  <header id="header">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 overflow">
          <div className="social-icons pull-right">
            <ul className="nav nav-pills">
              {social_icons.map(({ name, link, icon }) => {
                return (
                  <li key={name}>
                    <SocialIconLink link={link} icon={icon} />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="navbar navbar-inverse" role="banner">
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand" href="/">
            <h1>
              <img src={logo} alt="Thinkbots" className="header-logo" />
            </h1>
          </a>
        </div>
      </div>
    </div>
  </header>
)

export default Header
