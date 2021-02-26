import React from "react";
import { Accordion, Card, Button } from 'react-bootstrap'
import "./chapter.css";

const Chapter = ({ children }) => (
    <Card>{children}</Card>
);

const Header = ({ title, id }) => (
    <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey={id}>
            {title}
        </Accordion.Toggle>
    </Card.Header>
);

const Body = ({ id, children }) => (
    <Accordion.Collapse eventKey={id}>
        <Card.Body>
            <div>{children}</div>
        </Card.Body>
    </Accordion.Collapse>
);

const Img = ({ src }) => (
    <>
        {src ? (<div className="part-img"><img src={src} alt={src} /></div>) : ""}

    </>
);


Chapter.Header = Header;
Chapter.Body = Body;
Chapter.Img = Img;

export default Chapter;
