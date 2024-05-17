
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
          fırsatı kaçırma
        </p>
        <p>
            KOD ACIKTIRIR
        </p>
        <p>
            PIZZA, DOYURUR
        </p>
        <nav>
            <Link to="/siparis-ver" className="main-page-button">ACIKTIM</Link>
        </nav>
    </div>
    <footer className='mainpage-footer'>
    <nav>
            <Link to="/siparis-ver" className="main-page-kore">YENİ!! Kore</Link>
    </nav>
    <nav>
            <Link to="/siparis-ver" className="main-page-pizza">Pizza</Link>
    </nav>
    <nav>
            <Link to="/siparis-ver" className="main-page-burger">Burger</Link>
    </nav>
    <nav>
            <Link to="/siparis-ver" className="main-page-kizartmalar">Kızartmalar</Link>
    </nav>
    <nav>
            <Link to="/siparis-ver" className="main-page-fastfood">Fast Food</Link>
    </nav>
    <nav>
            <Link to="/siparis-ver" className="main-page-gazli">Gazlı İçecek</Link>
    </nav>
    </footer>
    </>
    
    
  );
}


