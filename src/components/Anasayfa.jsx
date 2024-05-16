
import { NavLink, Link } from 'react-router-dom/cjs/react-router-dom.min';
import Header from './Header';
import App from '../App';

export default function Anasayfa() {

  return (
    < >
    <header>
    <h1>Teknolojik Yemekler</h1>
    </header>
    <div className='main-page-body'>
        <p>
            KOD ACIKTIRIR
            PIZZA, DOYURUR
        </p>
        <nav>
            <Link to="/siparis-ver" className="main-page-button">ACIKTIM</Link>
        </nav>
    </div>
    </>
    
    
  );
}


