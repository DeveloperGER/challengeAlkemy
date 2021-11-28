import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import '@popperjs/core'

import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import Rout from './routes/Rout';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Rout />
    </BrowserRouter>
  );
}

export default App;
