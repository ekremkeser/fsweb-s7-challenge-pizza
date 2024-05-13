import { useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';

function Header(props) {
  const history = useHistory();

  return (
    <header>
      <h1>Teknolojik Yemekler</h1>
      Anasayfa - Sipariş Oluştur
    </header>
  );
}

export default Header;
