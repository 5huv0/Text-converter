import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React , { useState } from 'react';
import Alert from './components/Alert';

function App() {

  const[alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      typ : type
    })
    setTimeout(() => {
      setAlert(null);
    },3000);
  }


  const [mode, setMode] = useState('light');

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been enabled', 'success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
    }
  }

  return (
    <>
      <Navbar title = "TextUtils" mode = {mode} toggleMode = {toggleMode} />

      <Alert alert = {alert}/>

      <div className = "container">
        <TextForm heading = "Text here" showAlert = {showAlert} mode = {mode}/>
      </div>

      {/* <div className="container">
        <About/>
      </div> */}

    </>
  );
}

export default App;
