import React from 'react'

import bg from './slider-bg.png'
import team from './team_working.png'

const sectionStyle = {
  background: `url(${bg}) 0 100% repeat-x`,
}

const Slider = () => (
  <section id="home-slider" style={sectionStyle}>
    <div className="container">
      <div className="row">
        <div className="main-slider">
          <div className="slide-text">
            <h1>We craft user focused digital experiences.</h1>
            <h2>Have a project for us?</h2>
            <a href="#hireUs" className="btn btn-common" data-toggle="modal">
              Get in touch
            </a>
          </div>
          <img src={team} className="slider-team" alt="slider image" />
        </div>
      </div>
    </div>
  </section>
)

export default Slider
