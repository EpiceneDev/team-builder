import React from 'react';
import { Link } from 'react-router-dom';
//Remember what you want to  have...{ name: "", email: "", role: ""}

const Card = (props) => {
    const { member } = props;
    return (
        <div className="card">
            <h3>{member.name}</h3>
            <h4>{member.email}</h4>
            <h4>{member.role}</h4>
            <Link to={`/edit/${member.id}`} className="link"><button>Edit</button></Link>
        </div>
    )
};

export default Card;