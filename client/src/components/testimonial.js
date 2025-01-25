import React from 'react'

import PropTypes from 'prop-types'

import './testimonial.css'

const Testimonial = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial-max-width thq-section-max-width">
        <div className="testimonial-container10">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span className="testimonial-text11 thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card1">
                <div className="testimonial-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial-image1"
                  />
                  <div className="testimonial-container13">
                    <strong className="thq-body-large">
                      {props.author1Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text14 thq-body-small">
                  {props.review1}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card2">
                <div className="testimonial-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial-image2"
                  />
                  <div className="testimonial-container15">
                    <strong className="thq-body-large">
                      {props.author2Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text17 thq-body-small">
                  {props.review2}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card3">
                <div className="testimonial-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial-image3"
                  />
                  <div className="testimonial-container17">
                    <strong className="thq-body-large">
                      {props.author3Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text20 thq-body-small">
                  {props.review3}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card4">
                <div className="testimonial-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial-image4"
                  />
                  <div className="testimonial-container19">
                    <strong className="thq-body-large">
                      {props.author4Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text23 thq-body-small">
                  {props.review4}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial.defaultProps = {
  author3Position: 'UI/UX Designer',
  author2Name: 'Jane Smith',
  author1Name: 'John Doe',
  author4Src:
    'https://images.unsplash.com/photo-1542206395-9feb3edaa68d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzc5MTE2OHw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Src:
    'https://images.unsplash.com/photo-1527082395-e939b847da0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzc5MTE2OHw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: 'Testimonials',
  author3Name: 'Alex Johnson',
  author3Src:
    'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzc5MTE2OXw&ixlib=rb-4.0.3&q=80&w=1080',
  review2:
    'Great platform for networking and finding team members. The quiz feature was fun and engaging.',
  content1:
    'Read what our users have to say about their experience with our platform.',
  author3Alt: 'Alex Johnson - UI/UX Designer',
  review1:
    'I found the perfect team for my project through this platform. The expert badges helped me connect with skilled professionals easily.',
  review4:
    "This platform has been a game-changer for me. I've connected with top professionals in my field and learned so much from them.",
  author2Alt: 'Jane Smith - Data Scientist',
  author4Alt: 'Emily Brown - Project Manager',
  author2Src:
    'https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzc5MTE2OHw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Position: 'Software Developer',
  author1Alt: 'John Doe - Software Developer',
  author4Name: 'Emily Brown',
  author2Position: 'Data Scientist',
  author4Position: 'Project Manager',
  review3:
    'I love how easy it is to schedule calls with experts. The notifications are very helpful in reminding me of upcoming meetings.',
}

Testimonial.propTypes = {
  author3Position: PropTypes.string,
  author2Name: PropTypes.string,
  author1Name: PropTypes.string,
  author4Src: PropTypes.string,
  author1Src: PropTypes.string,
  heading1: PropTypes.string,
  author3Name: PropTypes.string,
  author3Src: PropTypes.string,
  review2: PropTypes.string,
  content1: PropTypes.string,
  author3Alt: PropTypes.string,
  review1: PropTypes.string,
  review4: PropTypes.string,
  author2Alt: PropTypes.string,
  author4Alt: PropTypes.string,
  author2Src: PropTypes.string,
  author1Position: PropTypes.string,
  author1Alt: PropTypes.string,
  author4Name: PropTypes.string,
  author2Position: PropTypes.string,
  author4Position: PropTypes.string,
  review3: PropTypes.string,
}

export default Testimonial
