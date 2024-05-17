import { Switch, Route, NavLink } from 'react-router-dom';
import './components/cmponents.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Anasayfa from './components/Anasayfa';
import SiparisSayfa from './components/SiparisSayfa';
import SonSayfa from './components/SonSayfa';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

export default function App() {

return (
  <>
    <div>
      <Switch>
        <Route path="/" exact>
          <Anasayfa />
        </Route>
        <Route path="/siparis-ver">
          <SiparisSayfa />
        </Route>
        <Route path="/siparis-alindi">
          <SonSayfa />
        </Route>
      </Switch>
    </div>
  </>
  );
}

