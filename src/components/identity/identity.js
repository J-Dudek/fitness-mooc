import { Card, Button } from 'react-bootstrap'
const Identity = ({ member }) => (
    <Card >
        <Card.Img variant="top" style={{ borderRadius: '50%', maxWidth: '180px', maxHeight: '180px', alignSelf: 'center' }} src={member.avatar} />
        <Card.Body>
            <Card.Title>{member.name} {member.firstname}</Card.Title>
            <Card.Text>
                {member.bio}
            </Card.Text>
        </Card.Body>
    </Card>
);

export default Identity;