import React from 'react'

import Service from './service'

import '../../fonts/Flaticon/tb-flaticon.css'

import services from './services.yml'

const Services = () => (
  <section className="section" id="services">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 text-center">
          <h2 className="title">Our Services</h2>
          <p className="title-alt">
            We'll help you deliver great experiences to your customers.
          </p>
        </div>
      </div>

      <div className="row">
        {services.map(({ title, icon, description }) => {
          return (
            <Service
              key={title}
              title={title}
              icon={icon}
              description={description}
            />
          )
        })}
      </div>
    </div>
  </section>
)

export default Services
