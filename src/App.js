import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      toast("Dark mode has been enabled",{position:"top-center"})
     
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      toast.success("Light mode has been enabled",{position:"top-center"})  
    }
  }
  return (
   <>
     <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} key={new Date()} />
     <TextForm  heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode}/>
     <ToastContainer/>
   </>
  );
}

export default App;
