import React, { useState } from 'react';
import './App.css';

function App() {
  const [member, setMember] = useState({username: "", password: ""});

  const handleChange = event => {
    setMember({...member, [event.target.name]: event.target.value});
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(member.membername);
    console.log(member.password);
  };

  return (
    <div className="App">
      {console.log("Member returned from App", member)}

      <form onSubmit={event => handleSubmit(event)}>
      <label>
        Team Member:
        <input
          type="text"
          name="membername"
          onChange={event => handleChange(event)}
        />
      </label>

      <label>
        Password:
        <input
          type="text"
          name="password"
          onChange={event => handleChange(event)}
        />
      </label>

      <button>Submit!</button>
      </form>
      
    </div>
  );
}
        

export default App;
