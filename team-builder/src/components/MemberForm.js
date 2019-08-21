import React, { useState } from "react";

//NEED {name: "", email: "", role: ""}

const MemberForm = props => {
  const { member } = props;

  return (
    <>
      <h3>{member.name}</h3>
      <h5>{member.email}</h5>
      <h5>{member.role}</h5>
    </>
  )
};
     

export default MemberForm;
