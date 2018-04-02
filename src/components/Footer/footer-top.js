import React from 'react'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faHeart from '@fortawesome/fontawesome-free-solid'

import SocialIconLink from '../Header/SocialIconLink'

const social_icons = [
  { name: 'facebook-f', link: '//facebook.com/thinkbotsIO' },
  { name: 'github', link: '//github.com/thinkbots' },
  { name: 'twitter', link: '//twitter.com/ThinkbotsIO' },
  { name: 'linkedin-in', link: '//www.linkedin.com/company/thinkbots' },
]

const FooterTop = () => (
  <section className="content-block-nopad bg-deepocean footer-wrap-1-1">
    <div className="container footer-1-1">
      <div className="row">
        <div className="col-sm-5 margin-bottom45">
          <h4>About Us</h4>
          <p className="">
            We are passionate about using agile methods to build secure web and
            mobile applications that have a sharp focus on well thought-out
            aesthetics and usability.
          </p>
        </div>
        <div className="col-sm-5 col-sm-offset-2">
          <h4>Contact Us</h4>
          <p className="lead">
            <strong>
              <a href="#hireUs" data-toggle="modal">
                Let's build something amazing!{' '}
                <FontAwesomeIcon icon="long-arrow-alt-right" />
              </a>
            </strong>{' '}
          </p>
          <div className="social-icons">
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
  </section>
)

export default FooterTop
