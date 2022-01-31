
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import React, {useState} from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";


//function based component
function App() {
  const [mode ,setMode] = useState('light'); //whether dark mode is enables or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type)=>{
setAlert({
  msg : message,
  type: type
})
setTimeout(() =>{  //alert message ko 3 sec k baad dismiss krdega
   setAlert(null);
} ,3000);
  }
  const removeBodyClasses= ()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
  }
  const toggleMode = (cls)=>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);
    if(mode === 'light'){
      setMode('dark');
      document.body.style.background ='grey';
  showAlert("dark mode has been enabled","success");
  document.title = 'Textutilise - dark mode'; //for changing the title of page acc to page mode
    }
    else{
      setMode('light');
      document.body.style.background ='white';
      showAlert("light mode has been enabled","success");
      document.title = 'Textutilise - light mode';
    }
  }
  return (
    <>
    
<Navbar title="textutilise2" aboutText="about utilise" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>
<div className="container my-3">
<TextForm showAlert={showAlert} heading="Enter the text here" mode={mode} />
<About/>
</div>

    </>
  );
}

export default App;
