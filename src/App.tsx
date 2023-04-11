import './App.css';
import ClientContent from './pages/Client/ClientContent/ClientContent';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Client/Home/Home';
import Restaurants from './pages/Client/Restaurants/Restaurants';
import Menu from './pages/Client/Menu/Menu';
import { Cart } from './pages/Client/Cart/Cart';
import { NotFound } from './pages/NotFound/NotFound';
import { Checkout } from './pages/Client/Checkout/Checkout';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<ClientContent />}>
          <Route path='' element={<Home/>} />
          <Route path='cart' element={<Cart />} />
          <Route path='restaurants' element={<Restaurants />} />
          <Route path='restaurants/:id' element={<Menu />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
