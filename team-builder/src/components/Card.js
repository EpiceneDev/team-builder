import React from 'react';
//Remember what you want to  have...{ name: "", email: "", role: ""}

const Card = (props) => {
    const { member } = props;
    return (
        <div className="card">
            <h3>{member.name}</h3>
            <h4>{member.email}</h4>
            <h4>{member.role}</h4>
        </div>
    )
};

export default Card;