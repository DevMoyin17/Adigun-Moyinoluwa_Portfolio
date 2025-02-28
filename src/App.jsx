import './App.css'
import React, { useRef } from "react";
import Navbar from './Component/Navbar'
import Header from './Component/Header';
import About from './Component/About';
import Services from './Component/Services';
import Works from './Component/Works';
import Banners from './Component/Banners';
import Contact from './Component/Contact';
import Technologies from './Component/Technologies';



function App() {
  const contactRef = useRef(null);

  
  return (
    <>
     <div className='overflow-hidden'>
      <Navbar/>
      <Header/>
      <Banners  contactRef={contactRef} />
      <Technologies/>
      <About/>
      <Services/>
      <Works/>
      <Contact ref={contactRef}  />

      
     </div>
    </>
  )
}

export default App
