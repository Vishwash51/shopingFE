import React,{useState,useEffect} from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Product from './Components/Product';
import About from './Components/About';
import Contact from './Components/Contact';
import { css } from "@emotion/react";
import RingLoader from "react-spinners/RingLoader";

function App() {

  const[loading,setLoading]=useState(false);
  const override=css`
  display:block;

  border-color:red;
  margin-top:20%;
`;
useEffect(()=>{
  setLoading(true)
  setTimeout(() => {
    setLoading(false)
  }, 5000);
},[])

  return (
    <div className="App">
     {
       loading?<div style={{position: "absolute",  top: "50%",  left: "50%",  transform: "translate(-50%, -50%)"}}><RingLoader color={"#3d2515"} Loading={loading} css={override} size={100} /></div>
       :
       <>
          <Navbar/>
          <Header/>
          <Product/>
          <About/>
          <Contact/>
       </>
     }
    </div>
  );
}

export default App;
