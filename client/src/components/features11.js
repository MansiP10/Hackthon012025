import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './features11.css'

const Features11 = (props) => {
  return (
    <div className="features11-layout251 thq-section-padding">
      <div className="features11-max-width thq-section-max-width">
        <div className="thq-flex-row features11-section-title">
          <div className="features11-column thq-flex-column">
            <span className="thq-body-small">
              {props.slogan ?? (
                <Fragment>
                  <span className="features11-text17">
                    Unlock Your Potential
                  </span>
                </Fragment>
              )}
            </span>
            <h2 className="thq-heading-2 features11-text11">
              {props.sectionTitle ?? (
                <Fragment>
                  <span className="features11-text22">Key Features</span>
                </Fragment>
              )}
            </h2>
          </div>
          <span className="thq-body-small">
            {props.sectionDescription ?? (
              <Fragment>
                <span className="features11-text13">
                  Discover the powerful features that TeamFinder offers to
                  enhance your team collaboration experience.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="features11-content1">
          <div className="features11-row thq-flex-row">
            <div className="features11-feature1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-ratio-4-3 features11-feature1-image"
              />
              <div className="features11-content2 thq-flex-column">
                <h3 className="thq-heading-3">
                  {props.feature1Title ?? (
                    <Fragment>
                      <span className="features11-text19">Expert Badges</span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature1Description ?? (
                    <Fragment>
                      <span className="features11-text20">
                        Earn badges for specific skills to showcase your
                        expertise and stand out to potential team members.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features11-feature2 thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3 features11-feature2-image"
              />
              <div className="features11-content3 thq-flex-column">
                <h3 className="thq-heading-3">
                  {props.feature2Title ?? (
                    <Fragment>
                      <span className="features11-text23">Skill Experts</span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature2Description ?? (
                    <Fragment>
                      <span className="features11-text15">
                        Connect with experienced individuals in various fields
                        to learn from their knowledge and improve your skills.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features11-feature3 thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3 features11-feature3-image"
              />
              <div className="features11-content4 thq-flex-column">
                <h3 className="thq-heading-3">
                  {props.feature3Title ?? (
                    <Fragment>
                      <span className="features11-text16">
                        Skill Improvement Calls
                      </span>
                    </Fragment>
                  )}
                </h3>
                <span className="thq-body-small">
                  {props.feature3Description ?? (
                    <Fragment>
                      <span className="features11-text18">
                        Schedule calls with skill experts to receive
                        personalized guidance and tips for enhancing your
                        skills.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="features11-actions">
          <button className="thq-button-filled features11-button1">
            <span className="thq-body-small">
              {props.mainAction ?? (
                <Fragment>
                  <span className="features11-text21">Earn Expert Badges</span>
                </Fragment>
              )}
            </span>
          </button>
          <button className="thq-button-outline features11-button2">
            <span className="thq-body-small">
              {props.secondaryAction ?? (
                <Fragment>
                  <span className="features11-text14">
                    Connect with Skill Experts
                  </span>
                </Fragment>
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

Features11.defaultProps = {
  sectionDescription: undefined,
  feature3ImageAlt: 'Skill Improvement Calls Image',
  feature2ImageAlt: 'Skill Experts Image',
  secondaryAction: undefined,
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1732885787638-db5ae05bb707?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzc5MzkwN3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Description: undefined,
  feature3Title: undefined,
  slogan: undefined,
  feature3Description: undefined,
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzc5MzkwN3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Title: undefined,
  feature1Description: undefined,
  mainAction: undefined,
  feature1ImageSrc:
    'https://images.unsplash.com/flagged/photo-1553028826-ccdfc006d078?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzc5MzkwN3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImageAlt: 'Expert Badges Image',
  sectionTitle: undefined,
  feature2Title: undefined,
}

Features11.propTypes = {
  sectionDescription: PropTypes.element,
  feature3ImageAlt: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  secondaryAction: PropTypes.element,
  feature2ImageSrc: PropTypes.string,
  feature2Description: PropTypes.element,
  feature3Title: PropTypes.element,
  slogan: PropTypes.element,
  feature3Description: PropTypes.element,
  feature3ImageSrc: PropTypes.string,
  feature1Title: PropTypes.element,
  feature1Description: PropTypes.element,
  mainAction: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  sectionTitle: PropTypes.element,
  feature2Title: PropTypes.element,
}

export default Features11
