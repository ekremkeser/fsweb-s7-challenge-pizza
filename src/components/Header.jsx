import { useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';

function Header(props) {
  const history = useHistory();

  return (
    <header>
      <h1>Teknolojik Yemekler</h1>
      <div className='red-backgorund'>
        <h6 className='yazi-anasayfa'> Anasayfa - </h6>
        <h6 className='yazi-siparisolustur'> Sipariş Oluştur </h6>
        </div>
    </header>
  );
}

export default Header;
