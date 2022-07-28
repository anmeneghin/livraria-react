import React from 'react';
import Main from '../components/Main';
import './../_assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FavoritesProvider } from '../contexts/contextFavorites';

function App() {
  return (
    <>
      <FavoritesProvider>
        <Main />
      </FavoritesProvider>
    </>
  );
}
export default App;