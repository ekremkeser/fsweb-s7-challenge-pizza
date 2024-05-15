import { Switch, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import PizzaBoyutu from "./components/PizzaBoyutu"
import Hamur from './components/Hamur';
import SiparisNotu from './components/SiparisNotu';
import './components/cmponents.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import EkMalzemeler from './components/EkMalzemeler';
import { useState } from 'react';

function App() {

return (
    <>
      <Header />
      <div className='main-section'>
        <h4 className='space-between'>
          Position Absolute Acı Pizza
        </h4>
        <div className='pizza-name'>
        <h3>
          85.50 TL
        </h3>
        <h6>
          4.9
        </h6><h6>
          200
        </h6>
        </div>
        <p className='space-between'>
          Saçma Metin Saçma Metin Saçma Metin Saçma Metin Saçma Metin Saçma Metin
          Saçma Metin Saçma Metin Saçma Metin Saçma Metin Saçma Metin Saçma Metin
          Saçma Metin Saçma Metin Saçma Metin Saçma Metin Saçma Metin Saçma Metin
          Saçma Metin Saçma Metin Saçma Metin Saçma Metin Saçma Metin Saçma Metin
        </p>
        <div className="pizza-type space-between">
        <PizzaBoyutu/>
        <Hamur/>
        </div>
        <EkMalzemeler className='space-between'/>
        
        
      </div>
    </>
  );
}

export default App
