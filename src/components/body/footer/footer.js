import React from "react";
import './footer.css';
const Footer = ({ foot, team }) => (
    <div className="footer">
        <p>{foot.desc}</p>
        <h5> Contributors</h5>
        {team ? (
            team.map(member => <div key={member.id}> {member.name} {member.firstname}</div>)
        ) : "Confidential"}

    </div>
);

export default Footer;