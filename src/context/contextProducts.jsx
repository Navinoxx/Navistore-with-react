import { createContext, useEffect, useState } from 'react';
import { getProducts } from '../data/getProducts';
import { getCategories } from '../data/getCategories';
import PropTypes from 'prop-types';

export const ProductContext = createContext();

export function ProductContextProvider({ children }) {
    const [products, setProducts] = useState({});
    const [categories, setCategories] = useState({});
    const [productsFiltered, setProductsFiltered] = useState({});

    useEffect(() => {
        getProducts()
            .then(res => {
                setProducts(res);
            });

        getCategories()
            .then(res => {
                setCategories(res);
            });

    }, []);

    return (
        <ProductContext.Provider value={{ products, categories, productsFiltered, setProductsFiltered }}>
        {children}
        </ProductContext.Provider>
    );
}

ProductContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
