import { useMemo } from "react";

export const useBorderStyles = (productsFiltered, sizeOptions) => {
    const borderStyles = useMemo(() => {
        if (!productsFiltered) return [];

        const borderRightStyles = productsFiltered.map((_, index) =>
            sizeOptions.map(size => ((index + 1) % size === 0) ? 'none' : '1px solid #E0E0E0')
        );

        const borderBottomStyles = productsFiltered.map((_, index) =>
            sizeOptions.map(size => {
                const startOfLastRow = productsFiltered.length - (productsFiltered.length % size || size);
                return index >= startOfLastRow ? 'none' : '1px solid #E0E0E0';
            })
        );

        return { borderRightStyles, borderBottomStyles };
    }, [productsFiltered, sizeOptions]);

    return borderStyles;
};
