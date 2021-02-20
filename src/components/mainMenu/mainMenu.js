import React, { Component, Fragment } from 'react';
import { Accordion } from 'react-bootstrap'
import Section from './section';

class MainMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    const { cards } = this.props;
    const { questions } = this.props;
    return (
      <Fragment>
        <Accordion defaultActiveKey="0">

          {cards.map((card) => (<Section key={card.id} card={card} questions={questions} />))
          }
        </Accordion>
      </Fragment>
    );
  }
}

export default MainMenu;