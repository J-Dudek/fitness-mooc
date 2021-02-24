import { Card } from 'react-bootstrap'
import './identity.css'
const Identity = ({ member }) => (
    <Card className='member' >
        <Card.Img variant="top" style={{ borderRadius: '50%', maxWidth: '100px', maxHeight: '100px', alignSelf: 'center' }} src={member.avatar} />
        <Card.Body>
            <Card.Title>{member.name} {member.firstname}</Card.Title>
            <Card.Text dangerouslySetInnerHTML={{ __html: member.bio }}>
            </Card.Text>
        </Card.Body>
    </Card>
);

export default Identity;