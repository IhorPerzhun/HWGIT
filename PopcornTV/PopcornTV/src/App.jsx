import { Outlet } from 'react-router-dom';
import Footer from './../src/componenets/Footer';
import Navbar from './../src/componenets/Navbar';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
