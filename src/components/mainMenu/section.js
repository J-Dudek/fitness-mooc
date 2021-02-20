import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap'
import ReactPlayer from 'react-player'
import Quizz from '../quizz/quizz'

const videoStyle = {
  margin: 'auto',
};

const Section = ({ card }) => (
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey={card.id}>
        {card.title}
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey={card.id}>
      <Card.Body>{card.url ? <ReactPlayer style={videoStyle} url={card.url} controls={true} pip={true} stopOnUnmount={false} /> : " "}<p>{card.program}</p>
        {card.quizz ? <Quizz questions={card.quizz} /> : ""}
      </Card.Body>
    </Accordion.Collapse>
  </Card>
)

export default Section;