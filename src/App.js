import React from 'react';
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { Route, Routes } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart } from "@mui/icons-material";
import { useSelector } from 'react-redux';

function App() {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  const getTotalQuantity = () => {
      let total = 0;
      cart.forEach(item => {
          total += item.quantity;
      })
      return total;
  }

  return (
    <div className="main-page">
      <div className="cart-header">
        <h1>Grocery Cart</h1>
        
        <div className='header-icons'>
        <div className='homeicon-header'>
        <HomeIcon id='home-icon' onClick={() => navigate('/')} />
        <p>Home</p>
        </div>

        <div className="shopping-cart">
                <ShoppingCart id='cart-icon' onClick={() => navigate('/cart')} />
                <p>Cart {getTotalQuantity() || 0}</p>
        </div>
        </div>

      </div>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
    </div>
  );
}

export default App;
