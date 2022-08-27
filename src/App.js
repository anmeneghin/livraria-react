import React from 'react';
import './assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FavoritesProvider } from './contexts/contextFavorites';
import AppRoutes from './routes';

function App() {
  return (
    <>
      <FavoritesProvider>
        <AppRoutes />
      </FavoritesProvider>
    </>
  );
}
export default App;