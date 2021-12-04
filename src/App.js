import Accueil from './accueil';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes,  Route, BrowserRouter as Router} from "react-router-dom";
import './App.css';
import BBC from './bbc';
import CNN from './cnn';
import ARTICLECNN from './articlecnn';
import ARTICLEBBC from './articebbc';
import Footer from './components/footer/footer';

function App() {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Accueil />} />
      <Route exact path="/bbc" element={<BBC />} />
      <Route exact path="/cnn" element={<CNN />} />
      <Route exact path="/articlecnn" element={<ARTICLECNN />} />
      <Route exact path="/articlebbc" element={<ARTICLEBBC />} />
      <Route exact path="/footer" element={<Footer />} />

      </Routes>
  </Router>
  );
}

export default App;
