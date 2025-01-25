import React, { Fragment } from 'react'

import SignUp5 from './sign-up5'
import './component.css'

const AppComponent = (props) => {
  return (
    <div className="component-container">
      <SignUp5
        action1={
          <Fragment>
            <span className="component-text1">Sign up with email</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="component-text2">Continue with Facebook</span>
          </Fragment>
        }
        action3={
          <Fragment>
            <span className="component-text3">Continue with Google</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="component-text4">
              Sign up for free and create your first project
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="component-text5">Create an account</span>
          </Fragment>
        }
      ></SignUp5>
    </div>
  )
}

export default AppComponent
