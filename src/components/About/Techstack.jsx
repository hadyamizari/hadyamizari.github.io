import React from 'react'
import {Col, Row} from 'react-bootstrap'
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
  DiAndroid,
  DiApple,
  DiGitCommit,
  DiGitBranch,
  DiGithubBadge,
  DiHtml5,
  DiCss3Full,
  DiSqllite,
} from 'react-icons/di'

function Techstack() {
  return (
    <Row style={{justifyContent: 'center', paddingBottom: '50px'}}>
      <Col xs={4} md={2} className='tech-icons'>
        <DiJavascript1 />
      </Col>

      <Col xs={4} md={2} className='tech-icons'>
        <DiNodejs />
      </Col>

      <Col xs={4} md={2} className='tech-icons'>
        <DiReact />
      </Col>

      <Col xs={4} md={2} className='tech-icons'>
        <DiGit />
      </Col>

      <Col xs={4} md={2} className='tech-icons'>
        <DiAndroid />
      </Col>

      <Col xs={4} md={2} className='tech-icons'>
        <DiApple />
      </Col>

      <Col xs={4} md={2} className='tech-icons'>
        <DiCss3Full />
      </Col>

      <Col xs={4} md={2} className='tech-icons'>
        <DiHtml5 />
      </Col>

      <Col xs={4} md={2} className='tech-icons'>
        <DiGitCommit />
      </Col>

      <Col xs={4} md={2} className='tech-icons'>
        <DiGitBranch />
      </Col>

      <Col xs={4} md={2} className='tech-icons'>
        <DiGithubBadge />
      </Col>

      <Col xs={4} md={2} className='tech-icons'>
        <DiSqllite />
      </Col>
    </Row>
  )
}

export default Techstack