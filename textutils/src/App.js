
import { useState } from 'react';
import './App.css';
 import About from './components/About';
import Navbar from './components/Navbar';
 import TextForm from './components/TextForm';
import Alert from './components/Alert';


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";




function App() {

  const[mode, setMode] = useState('light'); 
  const[alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{

    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);


  }

  const toggleMode = ()=> {
   if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#324689';
    showAlert("Dark mode has been enabled","success");
   }else{
     setMode('light');
     document.body.style.backgroundColor = 'white';
     showAlert("Light mode has been enabled","success");
   }    
  }
  return (
   <>
   <Router>
    
   <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} aboutText="About Us"/>
  <Alert alert={alert}/> 
   <div className="container my-3"> 
  <Routes>
          <Route path="/about" exact element={<About />} />
        
          <Route path="/" exact element={<TextForm showAlert={showAlert} heading="Enter the text to analyse below" mode={mode}/> } />
          
   </Routes>   
 </div> 

  </Router>
   </>
  );
}

export default App;
