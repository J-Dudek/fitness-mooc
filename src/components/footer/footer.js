import React from "react";
import './footer.css';
const Footer = ({ foot }) => (
    <div className="footer">
        <p>{foot.desc}</p>
        {foot.autors.map(aut => <div key={aut.id}> {aut.identity} : {aut.mail}</div>)}
    </div>
);

export default Footer;