import React from 'react'
import './App.css'
import Form from './Components/Login'

var userIsRegistered = true;

function App() {
  return (
    <div className="container">
      <Form 
         isRegistered={userIsRegistered}
      />
    </div>
  );
}

export default App;

