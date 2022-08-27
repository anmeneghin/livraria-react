import React from 'react';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Contacts from './pages/Contacts';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter basename='/livraria-react'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favoritos" element={<Favorites />} />
        <Route path="/contatos" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  )

}

export default AppRoutes;