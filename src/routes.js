import React from 'react';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/favoritos" element={<Favorites />} />
            </Routes>
        </BrowserRouter>
    )

}

export default AppRoutes;