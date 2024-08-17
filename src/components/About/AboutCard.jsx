import React from 'react'
import Card from 'react-bootstrap/Card'
import {ImPointRight} from 'react-icons/im'
import {TbPoint} from 'react-icons/tb'

function AboutCard() {
  return (
    <Card className='quote-card-view'>
      <Card.Body>
        <blockquote className='blockquote mb-0'>
          <p style={{textAlign: 'justify'}}>
            Hi Everyone, I am <span className='purple'>Hadya Mizari </span>
            from <span className='purple'> Beirut, Lebanon.</span>
            <br />
            I am currently employed as a mobile and frontend developer at
            Coders.
            <br />
            I have completed Bachelors in Computer Science.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className='about-activity'>
              <TbPoint /> Tennis
            </li>
            <li className='about-activity'>
              <TbPoint /> Oil Paintings
            </li>
            <li className='about-activity'>
              <TbPoint /> Chess
            </li>
          </ul>

          <p style={{color: 'rgb(155 126 172)'}}>
            "Any application that can be written in JavaScript will eventually
            be written in JavaScript!"{' '}
          </p>
          <footer className='blockquote-footer'>
            James Atwood (co-founder of Stack Overflow and Stack Exchange)
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  )
}

export default AboutCard
