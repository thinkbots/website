import React from 'react'

const Service = ({ icon, description, title }) => (
  <div className="col-sm-3">
    <div className="services-box text-center">
      <div className="service-icon-const">
        <i className={`flaticon-${icon}`} />
      </div>
      <h3>{title}</h3>

      <p
        className="text-muted"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  </div>
)

export default Service
