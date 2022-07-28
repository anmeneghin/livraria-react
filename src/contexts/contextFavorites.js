import { useState, createContext, useContext, useEffect } from "react";

const FavoriteContext = createContext()

export const FavoritesProvider = ({ children }) => {
    const value = localStorage.getItem('@bibliotecaFavoritos')
    const initialValue = value ? JSON.parse(value) : []

    const [favorites, setFavorites] = useState(initialValue);

    function toggleFavorite(book) {
        const exist = favorites.find(b => b.id === book.id);

        if (exist) {
            const newFavorites = favorites.filter(b => b.id !== book.id);
            setFavorites(newFavorites);
            localStorage.setItem('@bibliotecaFavoritos', JSON.stringify(newFavorites))
        } else {
            const newFavorites = [...favorites, book]
            setFavorites(newFavorites);
            localStorage.setItem('@bibliotecaFavoritos', JSON.stringify(newFavorites))
        }
    }


    useEffect(() => {
        console.log(favorites);
    }, [favorites])

    return (
        <FavoriteContext.Provider value={{ toggleFavorite, favorites }} >
            {children}
        </FavoriteContext.Provider>
    )
}

export function useFavorite() {
    return useContext(FavoriteContext)
}