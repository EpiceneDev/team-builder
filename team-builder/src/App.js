import React, { useState } from 'react';
import './App.css';
import MemberForm from './components/MemberForm';


function App() {
  const [members, setMembers] = useState([
    {name: "Bob", email: "some@thing.org", role: "cinnamin"},
    {name: "Mauli", email: "same@thing.org", role: "food"}
  ]);
  return (
    <div className="App">
      {members.map(member => <MemberForm member={member} />)}
    </div>
  );
}
        
export default App;