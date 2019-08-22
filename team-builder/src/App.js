import React, { useState } from 'react';
import './App.css';
import Form from './components/Form.js';
import Card from './components/Card.js';
import { Route, Link } from 'react-router-dom';


function App() {
  const [members, setMembers] = useState([
    {name: "Bob", email: "some@thing.org", role: "cinnamin"},
    {name: "Mauli", email: "same@thing.org", role: "food"}
  ]);

  const addMember = member => {
    setMembers([...members, member]);
  }
  return (
    
    <div className="App">
      <Link to='/'>Home</Link>
      <Link to='/add'>Add New Member</Link>
      <Route path="/add" 
            render={props => <Form {...props} submitMember={addMember} />} />
      <Route exact path="/" 
            render={props => members.map(member => <Card member={member} />)}/>
    </div>
  );
}
        
export default App;