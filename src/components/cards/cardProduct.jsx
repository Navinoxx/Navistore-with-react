import { useContext } from "react";
import { ProductContext } from "../../context/contextProducts";
import { Container } from '@mui/material';
import RecipeCard from './card';
import PropTypes from 'prop-types';

export default function CardProduct({handleFilterProduct}) {
    const { products, productsFiltered } = useContext(ProductContext);

    return (
        <Container maxWidth="xl" sx={{ display: 'flex', flexWrap: 'wrap', alignContent: 'start', gap: '1rem', marginY: '2rem'}}>
            {productsFiltered.length > 0 ? (
            productsFiltered?.map(product => (
                <RecipeCard key={product.id} product={product} handleFilterProduct={handleFilterProduct}/>
            ))
            ) : (
            products.products?.map(product => (
                <RecipeCard key={product.id} product={product} handleFilterProduct={handleFilterProduct}/>
            ))
            )}
        </Container>
    );
}

CardProduct.propTypes = {
    handleFilterProduct: PropTypes.func.isRequired,
};

