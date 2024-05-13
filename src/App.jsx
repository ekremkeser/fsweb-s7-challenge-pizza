import { Switch, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import PizzaBoyutu from "./components/PizzaBoyutu"
import Hamur from './components/Hamur';
import SiparisNotu from './components/SiparisNotu';
import './components/cmponents.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import EkMalzemeler from './components/EkMalzemeler';

function App() {

return (
    <>
      <Header />
      <div>
        <h4>
          Position Absolute Acı Pizza
        </h4>
        <h3>
          85.50 TL
        </h3>
        <p>
          Saçma Metin Saçma Metin Saçma Metin Saçma Metin Saçma Metin Saçma Metin
          Saçma Metin Saçma Metin Saçma Metin Saçma Metin Saçma Metin Saçma Metin
          Saçma Metin Saçma Metin Saçma Metin Saçma Metin Saçma Metin Saçma Metin
          Saçma Metin Saçma Metin Saçma Metin Saçma Metin Saçma Metin Saçma Metin
        </p>
        <PizzaBoyutu name="content-section"/>
        <Hamur name="content-section"/>
        <EkMalzemeler name="content-section"/>
        <SiparisNotu name="content-section"/>
      </div>
    </>
  );
}

export default App
