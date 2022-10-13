
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';

function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  useEffect(() => {
    console.log(email);
    console.log(password);
  },[email, password])

  function emailHandler(e){
      setEmail(e.target.value);
  }

  function passwordHandler(e){
    setPassword(e.target.value);
  }

  return (
    <div className="App">
      <Header handleEmailChange={emailHandler} handlePasswordChange={passwordHandler}></Header>
    </div>
  );
}

export default App;
