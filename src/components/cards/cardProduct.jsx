import { useStore } from "../../store/bookStore";
import { Grid } from "@mui/material";
import { RecipeCard } from "../cards/card";
import { useBorderStyles } from "../../hooks/useBorderStyles";

export const CardProduct = () => {
    const { productsFiltered } = useStore();
    const sizeOptions = [1, 2, 3];
    const { borderRightStyles, borderBottomStyles } = useBorderStyles(productsFiltered, sizeOptions);

    return (
        <Grid container component="section">
            {productsFiltered?.map((product, index) => (
                <Grid item xs={12} sm={6} lg={4} key={product.id} sx={{
                    borderRight: { xs: borderRightStyles[index][0], sm: borderRightStyles[index][1], lg: borderRightStyles[index][2] },
                    borderBottom: { xs: borderBottomStyles[index][0], sm: borderBottomStyles[index][1], lg: borderBottomStyles[index][2] }
                }}>
                    <RecipeCard product={product}/>
                </Grid>
            ))}
        </Grid>
    );
};
