import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Home';
import LoginPage from './Pages/Login';
import MenuComponent from './Components/Menu';
import ListPage from './Pages/Lista';
import DetailItem from './Pages/DetailItem';
import CartPage from './Pages/Carrinho';
import UserAccountPage from './Pages/Conta';

function App() {
  return (
    <BrowserRouter>
      <MenuComponent />

      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path='/products/:id' element={<ListPage/>}/>
        <Route path='/detail/:id' element={<DetailItem/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/account' element={<UserAccountPage/>}/>


      </Routes>
    </BrowserRouter>

  );
}

export default App;
