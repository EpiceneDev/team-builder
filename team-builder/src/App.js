import React, { useState } from 'react';
import './App.css';
import Form from './components/Form.js';
import Card from './components/Card.js';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';


function App() {
  const [members, setMembers] = useState([
    {id: 0, name: "Bob", email: "some@thing.org", role: "cinnamin"},
    {id: 1, name: "Mauli", email: "same@thing.org", role: "food"}
  ]);

  const addMember = member => {
    //setMembers([...members, member]); <==Changed to add id for editing purpose
    // setMembers([...members, {...member, id: Date.now()}]);
    axios.post(`http://localhost:3002/api/team-member/`, member)
      .then(res => {
        setMembers([...member, res.data])
      });
  };
  return (
    
    <div className="App">
      <Link to='/'>Home</Link>
      <Link to='/add'>Add New Member</Link>
      <Route path="/add" 
            render={props => <Form {...props} submitMember={addMember} />} />
      <Route exact path="/" 
            render={props => members.map(member => <Card member={member} />)}/>
      <Route path="/edit/:id"
            render={props => {
              console.log("Route to edit props: ", props);
              const member = members.find(member => member.id.toString() === props.match.params.id);
              return <Form {...props} initialMember={member} />
            }} />
    </div>
  );
}
        
export default App;