import React from 'react';
import Navbar from './componets/Navbar';
import Carousel from './componets/Carousel';
import Hero from './componets/Hero';
import Details from './componets/Details';
import Reviews from './componets/Reviews';
import Footer from './componets/Footer';
import './App.css';

function App() {
  return (
    <div >
      <Navbar />
      <Hero/>
      <Carousel />
      <Details/>
      <Reviews/>
      <Footer/>
      
    </div>
  );
}

export default App;