import React, { useState } from 'react';
import './App.css';
import MemberForm from './components/MemberForm';


function App() {
 
  return (
    <div className="App">
      <MemberForm member={{name: "Bob", email: "some@thing.org", role: "cinnamin"}} />
    </div>
  );
}
        
export default App;