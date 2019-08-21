import React, { useState } from "react";

//NEED {name: "", email: "", role: ""}

const Form = (props) => {
  const [member, setMember] = useState({name: "", email: "", role: ""});

  const handleChange = event => {
    setMember({...member, [event.target.name]: event.target.value});
  }

  const handleSubmit = event => {
    event.preventDefault();
    console.log(member);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="New Team Member" 
            value={member.name}
            name="name"
            onChange={handleChange} 
      />
      <input placeholder="email" 
            value={member.email} 
            name="email" onChange={handleChange} 
      />
      <input placeholder="role" 
            value={member.role} 
            name="role" 
            onChange={handleChange} 
      />
      <button type="submit">Submit</button>
    </form>

  )
};
     

export default Form;
