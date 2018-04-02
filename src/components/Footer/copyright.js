import React from 'react'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faHeart from '@fortawesome/fontawesome-free-solid'

const CopyrightBar = () => (
  <div className="copyright-bar bg-concrete">
    <div className="container">
      <p className="pull-left small">
        &copy; 2016{'-'}
        {new Date().getFullYear()} Thinkbots Pty Ltd.{' '}
        <a
          className="iubenda-white iubenda-embed"
          href="//www.iubenda.com/privacy-policy/7848904"
          id="privacy-policy"
          title="Privacy Policy"
        >
          Privacy Policy
        </a>
      </p>
      <p className="pull-right small">
        Crafted with <FontAwesomeIcon icon="heart" className="pomegranate" /> in
        Pretoria
      </p>
    </div>
  </div>
)

export default CopyrightBar
