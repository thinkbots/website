import React from 'react'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'

const SocialIconLink = ({ link, icon }) => (
  <a target="_blank" href={link}>
    <FontAwesomeIcon icon={['fab', icon]} />
  </a>
)

export default SocialIconLink
