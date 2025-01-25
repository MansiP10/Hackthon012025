import React from 'react'

import { Helmet, HelmetProvider } from 'react-helmet-async'

import './not-found.css'

const NotFound = (props) => {
  return (
    <div className="not-found1-container1">
      <HelmetProvider>
        <Helmet>
        <title>Spotless Hungry Crocodile</title>
        </Helmet>
      </HelmetProvider>
      <h3>OOPS! PAGE NOT FOUND</h3>
      <div className="not-found1-container2">
        <h1 className="not-found1-text2">404</h1>
      </div>
      <div className="not-found1-container3">
        <h2 className="not-found1-text3">
          WE ARE SORRY, BUT THE PAGE YOU REQUESTED WAS NOT FOUND
        </h2>
      </div>
    </div>
  )
}

export default NotFound
