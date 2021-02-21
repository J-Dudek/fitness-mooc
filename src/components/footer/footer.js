import React from "react";
import './footer.css';
const Footer = ({ foot }) => (
    <div className="footer">
        <p>{foot.desc}</p>
        {foot.autors.map(aut => <span key={aut.id}> {aut.identity} : {aut.mail}</span>)}
    </div>
);

export default Footer;