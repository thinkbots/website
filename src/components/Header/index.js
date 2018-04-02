import React from 'react'
import Link from 'gatsby-link'

import SocialIconLink from './SocialIconLink'

const social_icons = [
  { name: 'facebook', link: '//facebook.com/thinkbotsIO' },
  { name: 'github', link: '//github.com/thinkbots' },
  { name: 'twitter', link: '//twitter.com/ThinkbotsIO' },
  { name: 'linkedin', link: '//www.linkedin.com/company/thinkbots' },
]

const Header = () => (
  <header id="header">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 overflow">
          <div className="social-icons pull-right">
            <ul className="nav nav-pills">
              {social_icons.map(({ name, link }) => {
                return (
                  <li key={name}>
                    <SocialIconLink link={link} icon={name} />
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
            <h1>Thinkbots Logo</h1>
          </a>
        </div>
      </div>
    </div>
  </header>
)

export default Header
