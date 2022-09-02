import Header from './Header';
import Main from './Main';
import ShortenForm from './ShortenForm';
import AdvancedStats from './AdvancedStats';
import BoostLinks from './BoostLinks';
import Footer from './Footer';

// font awesome stuff
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFontAwesome, faSquareFacebook, faPinterest, faInstagram} from '@fortawesome/free-brands-svg-icons';

library.add(fas, faFontAwesome, faTwitter, faSquareFacebook, faPinterest, faInstagram);

function App() {
  return (
    <div className="app">
      <div className='partial-wrap'>
        <Header />
        <Main />
        <ShortenForm />
        <AdvancedStats />
      </div>
      <BoostLinks />
      <Footer />
    </div>
  );
}

export default App;
