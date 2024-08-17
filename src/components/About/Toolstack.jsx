import React from 'react'
import {Col, Row} from 'react-bootstrap'
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiMacos,
  SiWindows,
  SiGradle,
  SiIos,
  SiLinkedin,
  SiXcode,
  SiTypescript,
  SiYarn,
} from 'react-icons/si'

function Toolstack() {
  return (
    <Row style={{justifyContent: 'center', paddingBottom: '50px'}}>
      <Col xs={4} md={2} className='tech-icons'>
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiWindows />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiGradle />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiIos />
      </Col>

      <Col xs={4} md={2} className='tech-icons'>
        <SiLinkedin />
      </Col>

      <Col xs={4} md={2} className='tech-icons'>
        <SiXcode />
      </Col>

      <Col xs={4} md={2} className='tech-icons'>
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiYarn />
      </Col>

      <Col xs={4} md={2} className='tech-icons'>
        <SiSlack />
      </Col>
    </Row>
  )
}

export default Toolstack
