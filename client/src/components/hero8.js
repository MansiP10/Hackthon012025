import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './hero8.css'

const Hero8 = (props) => {
  return (
    <div className="hero8-header26 thq-section-padding">
      <div className="hero8-max-width thq-section-max-width thq-flex-column">
        <div className="hero8-column">
          <div className="hero8-content">
            <h1 className="hero8-text1 thq-heading-1">
              {props.heading1 ?? (
                <Fragment>
                  <span className="hero8-text8">
                    Join TeamFinder and Boost Your Projects
                  </span>
                </Fragment>
              )}
            </h1>
            <p className="hero8-text2 thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="hero8-text5">
                    Connect with like-minded individuals for hackathons,
                    challenges, and group projects
                  </span>
                </Fragment>
              )}
            </p>
            <div className="hero8-actions">
              <button className="thq-button-filled hero8-button1">
                <span className="thq-body-small">
                  {props.action1 ?? (
                    <Fragment>
                      <span className="hero8-text6">Learn More</span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button className="thq-button-outline hero8-button2">
                <span className="thq-body-small">
                  {props.action2 ?? (
                    <Fragment>
                      <span className="hero8-text7">Get Started</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
        <img
          alt={props.image1Alt}
          src={props.image1Src}
          className="thq-img-ratio-16-9"
        />
      </div>
    </div>
  )
}

Hero8.defaultProps = {
  content1: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1535653750320-f9e7e6ae3967?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzc5MzkwN3w&ixlib=rb-4.0.3&q=80&w=1080',
  action1: undefined,
  image1Alt: 'Team collaboration at its best',
  action2: undefined,
  heading1: undefined,
}

Hero8.propTypes = {
  content1: PropTypes.element,
  image1Src: PropTypes.string,
  action1: PropTypes.element,
  image1Alt: PropTypes.string,
  action2: PropTypes.element,
  heading1: PropTypes.element,
}

export default Hero8
