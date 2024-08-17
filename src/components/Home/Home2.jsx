import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import myImg from '../../Assets/avatar.png'
import Tilt from 'react-parallax-tilt'
import {AiFillGithub, AiOutlineTwitter, AiFillInstagram} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'

function Home2() {
  return (
    <Container fluid className='home-about-section' id='about'>
      <Container>
        <Row>
          <Col md={8} className='home-about-description'>
            <h1 style={{fontSize: '2.6em'}}>
              LET ME <span className='purple'> INTRODUCE </span> MYSELF
            </h1>
            <p className='home-about-body'>
              I am passionate about software development and continuously seek
              new challenges to grow as a developer.
              <br />
              <br />I am skilled in technologies like
              <i>
                <b className='purple'>
                  {' '}
                  React JS, React Native, TypeScript, JavaScript, HTML, and CSS{' '}
                </b>
              </i>
              <br />
              <br />
              My areas of interest include building
              <i>
                <b className='purple'>
                  {' '}
                  Cross-platform Mobile Applications and Responsive Web
                  Applications,{' '}
                </b>
              </i>
              along with enhancing user experiences through
              <b className='purple'>
                {' '}
                UI design and seamless API integrations.
              </b>
              <br />
              <br />I love utilizing tools such as
              <b className='purple'> React Native, Expo, </b>
              and working with
              <i>
                <b className='purple'>
                  {' '}
                  Modern Libraries like React Native Paper and Material-UI.
                </b>
              </i>
            </p>
          </Col>

          <Col md={4} className='myAvtar'>
            <Tilt>
              <img src={myImg} className='img-fluid' alt='avatar' />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className='home-about-social'>
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className='purple'>connect </span>with me
            </p>
            <ul className='home-about-social-links'>
              <li className='social-icons'>
                <a
                  href='https://github.com/hadyamizari'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://www.linkedin.com/in/hadyamizari/'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
export default Home2
