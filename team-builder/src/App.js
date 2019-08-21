import React, { useState } from 'react';
import './App.css';
import Form from './components/Form.js';
import Card from './components/Card.js'


function App() {
  const [members, setMembers] = useState([
    {name: "Bob", email: "some@thing.org", role: "cinnamin"},
    {name: "Mauli", email: "same@thing.org", role: "food"}
  ]);
  return (
    <div className="App">
      <Form />
      {members.map(member => <Card member={member} />)}
    </div>
  );
}
        
export default App;