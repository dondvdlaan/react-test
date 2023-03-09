import React, { SetStateAction, useState }                  from 'react';
import axios, { AxiosResponse, Method }     from "axios";
import logo from './logo.svg';
import './App.css';

import {TopNavbar} from './components/TopNavbar';
import { ApiSimplified } from './shared/API';

function App() {

  // --- Variables & Constants ---
  const [servMessage, setServMessage] = useState<String>("Empty");

  console.log({servMessage})

  // --- Event handlers --- 
  const onRequets = () => {
    ApiSimplified("GET", "/hello")
    .then((res: AxiosResponse)=>{
      console.log("res: ", res.data )
      setServMessage(res.data)
    } )
  }
  return (
    <>
      <TopNavbar />

      <div className="container ">
        <div>
          Response Text: {servMessage}
        </div>
      
        <button onClick={onRequets} className="btn btn-primary ">
          Connect to BE
        </button>
      </div>
    
    
    </>
   



  );
}

export default App;
