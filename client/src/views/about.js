import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar4 from '../components/navbar4'
import Hero8 from '../components/hero8'
import Stats2 from '../components/stats2'
import Logos1 from '../components/logos1'
import Features11 from '../components/features11'
import Team1 from '../components/team1'
import Footer1 from '../components/footer1'
import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>About - Spotless Hungry Crocodile</title>
        <meta property="og:title" content="About - Spotless Hungry Crocodile" />
      </Helmet>
      <Navbar4
        link1={
          <Fragment>
            <span className="about-text10">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="about-text11">About Us</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="about-text12">Find Projects</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="about-text13">Expert Badges</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="about-text14">Contact Us</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="about-text15">Sign Up</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="about-text16">Log In</span>
          </Fragment>
        }
      ></Navbar4>
      <Hero8
        action1={
          <Fragment>
            <span className="about-text17">Learn More</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="about-text18">Get Started</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="about-text19">
              Connect with like-minded individuals for hackathons, challenges,
              and group projects
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="about-text20">
              Join TeamFinder and Boost Your Projects
            </span>
          </Fragment>
        }
      ></Hero8>
      <Stats2
        stat1={
          <Fragment>
            <span className="about-text21">Connect with Professionals</span>
          </Fragment>
        }
        stat2={
          <Fragment>
            <span className="about-text22">Skill Improvement</span>
          </Fragment>
        }
        stat3={
          <Fragment>
            <span className="about-text23">Earn Expert Badges</span>
          </Fragment>
        }
        stat4={
          <Fragment>
            <span className="about-text24">Network with Experts</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="about-text25">
              Easily find and connect with professionals in your field for
              collaboration
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="about-text26">
              Get guidance and insights from experts to enhance your projects
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="about-text27">Stats</span>
          </Fragment>
        }
        stat1Description={
          <Fragment>
            <span className="about-text28">
              Utilize our platform to team up with professionals for successful
              projects
            </span>
          </Fragment>
        }
        stat2Description={
          <Fragment>
            <span className="about-text29">
              Improve your skills by working with experienced professionals
            </span>
          </Fragment>
        }
        stat3Description={
          <Fragment>
            <span className="about-text30">
              Showcase your expertise by earning badges for your achievements
            </span>
          </Fragment>
        }
        stat4Description={
          <Fragment>
            <span className="about-text31">
              Expand your network by connecting with experts across various
              industries
            </span>
          </Fragment>
        }
      ></Stats2>
      <Logos1
        heading1={
          <Fragment>
            <span className="about-text32">
              Connect with Skilled Individuals
            </span>
          </Fragment>
        }
      ></Logos1>
      <Features11
        slogan={
          <Fragment>
            <span className="about-text33">Unlock Your Potential</span>
          </Fragment>
        }
        mainAction={
          <Fragment>
            <span className="about-text34">Earn Expert Badges</span>
          </Fragment>
        }
        sectionTitle={
          <Fragment>
            <span className="about-text35">Key Features</span>
          </Fragment>
        }
        feature1Title={
          <Fragment>
            <span className="about-text36">Expert Badges</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="about-text37">Skill Experts</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="about-text38">Skill Improvement Calls</span>
          </Fragment>
        }
        secondaryAction={
          <Fragment>
            <span className="about-text39">Connect with Skill Experts</span>
          </Fragment>
        }
        sectionDescription={
          <Fragment>
            <span className="about-text40">
              Discover the powerful features that TeamFinder offers to enhance
              your team collaboration experience.
            </span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="about-text41">
              Earn badges for specific skills to showcase your expertise and
              stand out to potential team members.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="about-text42">
              Connect with experienced individuals in various fields to learn
              from their knowledge and improve your skills.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="about-text43">
              Schedule calls with skill experts to receive personalized guidance
              and tips for enhancing your skills.
            </span>
          </Fragment>
        }
      ></Features11>
      <Team1
        member1={
          <Fragment>
            <span className="about-text44">John Doe</span>
          </Fragment>
        }
        member2={
          <Fragment>
            <span className="about-text45">Jane Smith</span>
          </Fragment>
        }
        member3={
          <Fragment>
            <span className="about-text46">Alex Johnson</span>
          </Fragment>
        }
        member4={
          <Fragment>
            <span className="about-text47">Emily Brown</span>
          </Fragment>
        }
        member5={
          <Fragment>
            <span className="about-text48">Full name</span>
          </Fragment>
        }
        member6={
          <Fragment>
            <span className="about-text49">Full name</span>
          </Fragment>
        }
        member7={
          <Fragment>
            <span className="about-text50">Full name</span>
          </Fragment>
        }
        member8={
          <Fragment>
            <span className="about-text51">Full name</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="about-text52">Join Our Team Today!</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="about-text53">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </Fragment>
        }
        content3={
          <Fragment>
            <span className="about-text56">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="about-text59">Meet Our Team</span>
          </Fragment>
        }
        heading2={
          <Fragment>
            <span className="about-text60">We’re hiring!</span>
          </Fragment>
        }
        member1Job={
          <Fragment>
            <span className="about-text61">Co-Founder &amp; CEO</span>
          </Fragment>
        }
        member2Job={
          <Fragment>
            <span className="about-text62">Head of Operations</span>
          </Fragment>
        }
        member3Job={
          <Fragment>
            <span className="about-text63">Lead Developer</span>
          </Fragment>
        }
        member4Job={
          <Fragment>
            <span className="about-text64">Marketing Specialist</span>
          </Fragment>
        }
        member5Job={
          <Fragment>
            <span className="about-text65">Job title</span>
          </Fragment>
        }
        member6Job={
          <Fragment>
            <span className="about-text66">Job title</span>
          </Fragment>
        }
        member7Job={
          <Fragment>
            <span className="about-text67">Job title</span>
          </Fragment>
        }
        member8Job={
          <Fragment>
            <span className="about-text68">Job title</span>
          </Fragment>
        }
        actionContent={
          <Fragment>
            <span className="about-text69">Open positions</span>
          </Fragment>
        }
        member1Content={
          <Fragment>
            <span className="about-text70">
              John is passionate about technology and entrepreneurship. With
              years of experience in the tech industry, he leads the vision and
              strategy for TeamFinder.
            </span>
          </Fragment>
        }
        member2Content={
          <Fragment>
            <span className="about-text71">
              Jane ensures smooth operations and user satisfaction. Her
              organizational skills and attention to detail keep TeamFinder
              running efficiently.
            </span>
          </Fragment>
        }
        member3Content={
          <Fragment>
            <span className="about-text72">
              Alex is a coding wizard with a knack for problem-solving. He
              oversees the technical aspects of TeamFinder&apos;s platform
              development.
            </span>
          </Fragment>
        }
        member4Content={
          <Fragment>
            <span className="about-text73">
              Emily&apos;s creativity and marketing expertise help promote
              TeamFinder to a wider audience. She is dedicated to showcasing the
              platform&apos;s value.
            </span>
          </Fragment>
        }
        member5Content={
          <Fragment>
            <span className="about-text74">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </span>
          </Fragment>
        }
        member6Content={
          <Fragment>
            <span className="about-text75">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </span>
          </Fragment>
        }
        member7Content={
          <Fragment>
            <span className="about-text76">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </span>
          </Fragment>
        }
        member8Content={
          <Fragment>
            <span className="about-text77">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </span>
          </Fragment>
        }
      ></Team1>
      <Footer1
        link1={
          <Fragment>
            <span className="about-text78">About Us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="about-text79">Contact Us</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="about-text80">FAQs</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="about-text81">Blog</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="about-text82">Terms of Service</span>
          </Fragment>
        }
        link6={
          <Fragment>
            <span className="about-text83">Privacy Policy</span>
          </Fragment>
        }
        link7={
          <Fragment>
            <span className="about-text84">Cookies Policy</span>
          </Fragment>
        }
        link8={
          <Fragment>
            <span className="about-text85">Expert Guidelines</span>
          </Fragment>
        }
        link9={
          <Fragment>
            <span className="about-text86">Skill Improvement Options</span>
          </Fragment>
        }
        link10={
          <Fragment>
            <span className="about-text87">Expert Availability</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="about-text88">Subscribe to Newsletter</span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="about-text89">
              Connect with us on social media for updates and more.
            </span>
          </Fragment>
        }
        content3={
          <Fragment>
            <span className="about-text90">
              &amp;copy; 2022 Hackathon Connect. All rights reserved.
            </span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="about-text91">/terms-of-service</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="about-text92">/cookies-policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="about-text93">/privacy-policy</span>
          </Fragment>
        }
        column1Title={
          <Fragment>
            <span className="about-text94">Company</span>
          </Fragment>
        }
        column2Title={
          <Fragment>
            <span className="about-text95">Resources</span>
          </Fragment>
        }
        socialLinkTitleCategory={
          <Fragment>
            <span className="about-text96">Follow Us</span>
          </Fragment>
        }
      ></Footer1>
    </div>
  )
}

export default About
