
import './identity.css'
const Identity = ({ member }) => (
    <div className="person">
        <img src={member.avatar} alt={`avatar de ${member.firstname}`} />
        <p className="name">{member.firstname}</p>
        <p>{member.bio}</p>
    </div>
);

export default Identity;
