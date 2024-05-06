import { create } from "zustand";
import { getProducts } from "../data/getProducts";
import { getCategories } from "../data/getCategories";
import { getComments } from "../data/getComments";

export const useStore = create((set, get) => ({
    products: [],
    categories: [],
    comments: [],
    productsFiltered: [],
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    favorites: JSON.parse(localStorage.getItem('favorites')) || [],
    filters: {
        priceRange: [0, Infinity],
        brands: [],
        categories: [],
    },
    loading: true,
    error: null,

    fetchInitialData: async () => {
        try {
            const [products, categories, comments] = await Promise.all([
                getProducts(),
                getCategories(),
                getComments(),
        ]);
        set({ products: products.products, categories, productsFiltered: products.products, comments: comments.comments });

        } catch (error) {
            set({ error: error.message });
        } finally {
            set({ loading: false });
        }
    },
    

    setFilteredProducts: (products) => set({ productsFiltered: products }),
    applyFilters: () => set((state) => {
        const { categories, priceRange, brands } = state.filters;
        const { products } = state;

        if (priceRange[1] === 0) {
            return { productsFiltered: [] };
        }
    
        const filteredProducts = products.filter(product =>
            (product.price >= priceRange[0] && product.price <= priceRange[1]) &&
            (categories.length === 0 || categories.includes(product.category)) &&
            (brands.length === 0 || brands.includes(product.brand))
        );

        return { productsFiltered: filteredProducts };
    }),
    setMultiFilter: (filterType, value) => set((state) => ({
        filters: { ...state.filters, [filterType]: value }
    })),
    clearAllFilters: () => set((state) => ({
        productsFiltered: state.products,
        filters: {
            categories: [],
            priceRange: [0, Math.max(...state.products.map(p => p.price), 100)],
            brands: []
        }
    })),

    addToCart: (product, quantity) => {
        const cart = get().cart;
        const existingProductIndex = cart.findIndex(item => item.id === product.id);

        const newCart = existingProductIndex !== -1
            ? [
                ...cart.slice(0, existingProductIndex),
                { ...cart[existingProductIndex], quantity: cart[existingProductIndex].quantity + quantity },
                ...cart.slice(existingProductIndex + 1),
            ]
            : [...cart, { ...product, quantity }];

        localStorage.setItem('cart', JSON.stringify(newCart));
        set({ cart: newCart });
    },
    removeFromCart: (product) => {
        const newCart = [...get().cart.filter(item => item.id !== product.id)];
        localStorage.setItem('cart', JSON.stringify(newCart));
        set({ cart: newCart });
    },
    clearCart: () => {  
        localStorage.removeItem('cart');
        set({ cart: [] });
    },

    addToFavorites: (product) => { 
        const newFavorites = [...get().favorites.filter(item => item.id !== product.id), product];
        localStorage.setItem('favorites', JSON.stringify(newFavorites));
        set({ favorites: newFavorites });
    },
    removeFromFavorites: (product) => {
        const newFavorites = [...get().favorites.filter(item => item.id !== product)];
        localStorage.setItem('favorites', JSON.stringify(newFavorites));
        set({ favorites: newFavorites });
    }
}));
