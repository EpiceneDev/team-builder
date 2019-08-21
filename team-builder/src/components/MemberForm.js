import React, { useState } from "react";

//NEED {name: "", email: "", role: ""}

const MemberForm = props => {
  const { member } = props;

  return (
    <form>
      <input placeholder="New Team Member" />
      <input placeholder="email" />
      <input placeholder="role" />
    </form>
  )
};
     

export default MemberForm;
