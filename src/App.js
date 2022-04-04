import React, { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './context/CartContext/CartProvider';

function App() {
  const [showModal, setShowModal] = useState(false);

  function manageModal(){
    return setShowModal(!showModal);
  }

  return (
    <CartProvider>
      {showModal && <Cart onManageModal={manageModal}/>}
      <Header onManageModal={manageModal}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
