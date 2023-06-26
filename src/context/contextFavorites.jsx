import { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const FavoritesContext = createContext();

const favoritesInitialState = JSON.parse(window.localStorage.getItem('favorites')) || []

function useFavoritesReducer() {
    const [favorites, setFavorites] = useState(favoritesInitialState);

    const addFavorite = (product) => {
        setFavorites((prevFavorites) => [...prevFavorites, product]);
        window.localStorage.setItem(
        'favorites',
        JSON.stringify([...favorites, product])
        );
    };

    const removeFavorite = (productId) => {
        setFavorites((prevFavorites) =>
        prevFavorites.filter((product) => product.id !== productId)
        );
        window.localStorage.setItem(
        'favorites',
        JSON.stringify(
            favorites.filter((product) => product.id !== productId)
        )
        );
    };

    const isInFavorites = (productId) => {
        return favorites.some((product) => product.id === productId);
    };

    return { favorites, addFavorite, removeFavorite, isInFavorites };
}

export function FavoritesContextProvider({ children }) {
    const { favorites, addFavorite, removeFavorite, isInFavorites } =
        useFavoritesReducer();

    return (
        <FavoritesContext.Provider
        value={{
            favorites,
            addFavorite,
            removeFavorite,
            isInFavorites,
        }}
        >
        {children}
        </FavoritesContext.Provider>
    );
}


FavoritesContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};