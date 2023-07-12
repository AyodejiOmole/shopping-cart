import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Store from './pages/Store';
import About from './pages/About';
import Navbar from './components/Navbar';
import ShoppingCart from './components/ShoppingCart';

function App() {

  return (
    <div className="z-1">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/store" element={<Store/>}/>
      </Routes>

      <ShoppingCart />
    </div>
  )
}

export default App;
