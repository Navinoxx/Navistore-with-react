import CardProduct from "../components/cards/cardProduct";
import NestedList from "../components/sidebar/sidebarProducts";
import Container from '@mui/material/Container';
import { useContext } from "react";
import { ProductContext } from "../context/contextProducts";
import { Typography } from "@material-ui/core";

export default function Products() {
    const { products, setProductsFiltered, productsFiltered } = useContext(ProductContext);

    const handleFilterProduct = (id) => {
        const filteredProducts = products.products.filter((product) => product.id === id);
        setProductsFiltered(filteredProducts[0]);
    }
    
    return (
        <Container maxWidth="xl" component="main" sx={{display: 'flex', marginTop: '2rem'}} >
            <NestedList/>
                {productsFiltered.length === 0 ? (
                    <Typography variant="h4">
                    No se encontraron resultados.
                    </Typography>
                        ) : (
                        <CardProduct handleFilterProduct={handleFilterProduct}/>
                    )}
        </Container>
    )
}