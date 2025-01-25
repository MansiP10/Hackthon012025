import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './steps1.css'

const Steps1 = (props) => {
  return (
    <div className="steps1-container1 thq-section-padding">
      <div className="steps1-max-width thq-section-max-width">
        <div className="steps1-container2">
          <div className="steps1-container3 thq-card">
            <img
              alt={props.step1ImageAlt}
              src={props.step1ImageSrc}
              className="steps1-image1 thq-img-ratio-1-1"
            />
            <h2 className="thq-heading-2">
              {props.step1Title ?? (
                <Fragment>
                  <span className="steps1-text29">Create a Profile</span>
                </Fragment>
              )}
            </h2>
            <span className="steps1-text11 thq-body-small">
              {props.step1Description ?? (
                <Fragment>
                  <span className="steps1-text24">
                    Sign up and create a detailed profile showcasing your
                    skills, expertise, and interests.
                  </span>
                </Fragment>
              )}
            </span>
            <label className="steps1-text12 thq-heading-3">01</label>
          </div>
          <div className="steps1-container4 thq-card">
            <img
              alt={props.step2Alt}
              src={props.step2ImageSrc}
              className="steps1-image2 thq-img-ratio-1-1"
            />
            <h2 className="thq-heading-2">
              {props.step2Title ?? (
                <Fragment>
                  <span className="steps1-text26">Find Experts</span>
                </Fragment>
              )}
            </h2>
            <span className="steps1-text14 thq-body-small">
              {props.step2Description ?? (
                <Fragment>
                  <span className="steps1-text22">
                    Browse through a diverse pool of experts based on their
                    skills, badges, and availability.
                  </span>
                </Fragment>
              )}
            </span>
            <label className="steps1-text15 thq-heading-3">02</label>
          </div>
        </div>
        <div className="steps1-container5">
          <div className="steps1-container6 thq-card">
            <img
              alt={props.step3ImageAlt}
              src={props.step3ImageSrc}
              className="steps1-image3 thq-img-ratio-1-1"
            />
            <h2 className="thq-heading-2">
              {props.step3Title ?? (
                <Fragment>
                  <span className="steps1-text27">Connect and Collaborate</span>
                </Fragment>
              )}
            </h2>
            <span className="steps1-text17 thq-body-small">
              {props.step3Description ?? (
                <Fragment>
                  <span className="steps1-text28">
                    Connect with experts, join teams, and collaborate on
                    hackathons, challenges, and projects.
                  </span>
                </Fragment>
              )}
            </span>
            <label className="steps1-text18 thq-heading-3">03</label>
          </div>
          <div className="steps1-container7 thq-card">
            <img
              alt={props.step4ImageAlt}
              src={props.step4ImageSrc}
              className="steps1-image4 thq-img-ratio-1-1"
            />
            <h2 className="thq-heading-2">
              {props.step4Title ?? (
                <Fragment>
                  <span className="steps1-text25">
                    Earn Badges and Improve Skills
                  </span>
                </Fragment>
              )}
            </h2>
            <span className="steps1-text20 thq-body-small">
              {props.step4Description ?? (
                <Fragment>
                  <span className="steps1-text23">
                    Take quizzes to earn expert badges, improve your skills, and
                    schedule calls with professionals for mentorship.
                  </span>
                </Fragment>
              )}
            </span>
            <label className="steps1-text21 thq-heading-3">04</label>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps1.defaultProps = {
  step2Description: undefined,
  step1ImageAlt: 'Profile Creation Image',
  step1ImageSrc:
    'https://images.unsplash.com/photo-1707406768319-4da74be4dc06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzc5NjM3Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  step4Description: undefined,
  step1Description: undefined,
  step4Title: undefined,
  step2ImageSrc:
    'https://images.unsplash.com/photo-1706701700545-daa073ec568b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzc5NjM3NXw&ixlib=rb-4.0.3&q=80&w=1080',
  step4ImageSrc:
    'https://images.unsplash.com/photo-1638202677704-b74690bb8fa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzc5NjM3Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  step3ImageSrc:
    'https://images.unsplash.com/photo-1484981138541-3d074aa97716?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzc5NjM3NXw&ixlib=rb-4.0.3&q=80&w=1080',
  step2Title: undefined,
  step3Title: undefined,
  step3ImageAlt: 'Connect and Collaborate Image',
  step3Description: undefined,
  step4ImageAlt: 'Earn Badges Image',
  step2Alt: 'Find Experts Image',
  step1Title: undefined,
}

Steps1.propTypes = {
  step2Description: PropTypes.element,
  step1ImageAlt: PropTypes.string,
  step1ImageSrc: PropTypes.string,
  step4Description: PropTypes.element,
  step1Description: PropTypes.element,
  step4Title: PropTypes.element,
  step2ImageSrc: PropTypes.string,
  step4ImageSrc: PropTypes.string,
  step3ImageSrc: PropTypes.string,
  step2Title: PropTypes.element,
  step3Title: PropTypes.element,
  step3ImageAlt: PropTypes.string,
  step3Description: PropTypes.element,
  step4ImageAlt: PropTypes.string,
  step2Alt: PropTypes.string,
  step1Title: PropTypes.element,
}

export default Steps1
