const urlProducts = 'https://dummyjson.com/products?limit=0'

export async function getProducts() {
    
    try {
        const response = await fetch(urlProducts);
        if (!response.ok) {
            throw new Error ('Error to get products');
        }
        return await response.json();
    } catch (error) {
        console.log('Error to get products: ' + error.message);
        throw error;
    }   
}