import React, { useState, useEffect } from 'react';
import './App.css';
import ClockLoader from "react-spinners/ClockLoader";

function App() {

  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },2500)
  },[])


  return (
    <div className="App">
     {
      loading ? 
       <ClockLoader color="#D0021B" loading={loading} size={100} />
      :
      <img src='https://c.tenor.com/32nHeCvxlwEAAAAM/you-tube-like-and-subscribe.gif'/>
     }
    </div>
  );
}

export default App;
