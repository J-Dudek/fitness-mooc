
import './identity.css'
import Col from 'react-bootstrap/Col'
const Identity = ({ member }) => (
    <div className="person">
        <Col lg={true}>
            <img src={member.avatar} alt={`avatar de ${member.firstname}`} />
            <p className="name">{member.firstname}</p>
            <p>{member.bio}</p>
        </Col>
    </div>
);

export default Identity;
