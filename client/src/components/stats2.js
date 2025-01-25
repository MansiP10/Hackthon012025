import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './stats2.css'

const Stats2 = (props) => {
  return (
    <div className="stats2-container1 thq-section-padding">
      <div className="stats2-max-width thq-section-max-width">
        <div className="stats2-container2 thq-flex-column">
          <img
            alt={props.image1Alt}
            src={props.image1Src}
            className="thq-img-ratio-1-1 stats2-image"
          />
        </div>
        <div className="stats2-container3 thq-flex-column">
          <span className="thq-body-small">
            {props.content1 ?? (
              <Fragment>
                <span className="stats2-text22">
                  Easily find and connect with professionals in your field for
                  collaboration
                </span>
              </Fragment>
            )}
          </span>
          <h2 className="thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="stats2-text23">Stats</span>
              </Fragment>
            )}
          </h2>
          <p className="thq-body-large">
            {props.content2 ?? (
              <Fragment>
                <span className="stats2-text26">
                  Get guidance and insights from experts to enhance your
                  projects
                </span>
              </Fragment>
            )}
          </p>
          <div className="stats2-container4 thq-grid-2">
            <div className="stats2-container5">
              <h2 className="thq-heading-2">
                {props.stat1 ?? (
                  <Fragment>
                    <span className="stats2-text29">
                      Connect with Professionals
                    </span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.stat1Description ?? (
                  <Fragment>
                    <span className="stats2-text25">
                      Utilize our platform to team up with professionals for
                      successful projects
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="stats2-container6">
              <h2 className="thq-heading-2">
                {props.stat2 ?? (
                  <Fragment>
                    <span className="stats2-text21">Skill Improvement</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.stat2Description ?? (
                  <Fragment>
                    <span className="stats2-text31">
                      Improve your skills by working with experienced
                      professionals
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="stats2-container7 thq-grid-2">
            <div className="stats2-container8">
              <h2 className="thq-heading-2">
                {props.stat3 ?? (
                  <Fragment>
                    <span className="stats2-text30">Earn Expert Badges</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.stat3Description ?? (
                  <Fragment>
                    <span className="stats2-text27">
                      Showcase your expertise by earning badges for your
                      achievements
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="stats2-container9">
              <h2 className="thq-heading-2">
                {props.stat4 ?? (
                  <Fragment>
                    <span className="stats2-text24">Network with Experts</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.stat4Description ?? (
                  <Fragment>
                    <span className="stats2-text28">
                      Expand your network by connecting with experts across
                      various industries
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Stats2.defaultProps = {
  stat2: undefined,
  content1: undefined,
  heading1: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1706701261093-521a5decda4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzc5MzkwN3w&ixlib=rb-4.0.3&q=80&w=1080',
  stat4: undefined,
  stat1Description: undefined,
  content2: undefined,
  stat3Description: undefined,
  image1Alt: 'Team Collaboration',
  stat4Description: undefined,
  stat1: undefined,
  stat3: undefined,
  stat2Description: undefined,
}

Stats2.propTypes = {
  stat2: PropTypes.element,
  content1: PropTypes.element,
  heading1: PropTypes.element,
  image1Src: PropTypes.string,
  stat4: PropTypes.element,
  stat1Description: PropTypes.element,
  content2: PropTypes.element,
  stat3Description: PropTypes.element,
  image1Alt: PropTypes.string,
  stat4Description: PropTypes.element,
  stat1: PropTypes.element,
  stat3: PropTypes.element,
  stat2Description: PropTypes.element,
}

export default Stats2
