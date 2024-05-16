import { useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom/cjs/react-router-dom.min';

function Header() {

  return (
    <header>
      <h1>Teknolojik Yemekler</h1>
      <div className='red-backgorund'>
        <Link className='writing-anasayfa' to="/">Anasayfa -  {" "} </Link>
        <Link className='writing-anasayfa' to="/siparis-ver"> {" "} Sipariş Oluştur </Link>
        </div>
    </header>
  );
}

export default Header;
