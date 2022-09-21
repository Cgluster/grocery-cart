import React from 'react';
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {
  return (
    <div className="main-page">
      <header className="cart-header">
        <h1>Grocery Cart</h1>
        <Home />
        <Cart />
      </header>
    </div>
  );
}

export default App;
