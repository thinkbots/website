import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'

import config from '../config'

import image from '../images/logo_md.png'
import favicon from '../images/favicon.ico'

import '../stylesheets/all.scss'

const schemaOrgJSONLD = [
  {
    '@context': 'http://schema.org',
    '@type': 'WebSite',
    url: config.url,
    name: config.site,
    alternateName: config.title,
  },
]

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet defaultTitle={config.title} titleTemplate={`%s | ${config.site}`}>
      <link rel="shortcut icon" href={favicon} />
      <meta name="description" content={config.description} />
      <meta name="image" content={image} />

      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      {/* OpenGraph tags */}
      <meta property="og:url" content={config.url} />
      <meta name="og:site_name" content={config.site} />
      <meta name="og:type" content="website" />
      <meta name="og:title" content={config.title} />
      <meta name="og:description" content={config.description} />
      <meta name="og:image" content={image} />

      {/* Twitter Card tags */}
      <meta name="twitter:site" content={config.twitter} />
      <meta name="twitter:card" content={config.twitter_title} />
      <meta name="twitter:creator" content={config.twitter} />
      <meta name="twitter:title" content={config.twitter_title} />
      <meta name="twitter:description" content={config.description} />
      <meta name="twitter:image" content={image} />
    </Helmet>

    <Header />
    <div>{children()}</div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
