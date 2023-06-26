const urlProducts = 'https://dummyjson.com/products?limit=0'

export async function getProducts() {
    
    try {
        const response = await fetch(urlProducts);
        if (!response.ok) {
            throw new Error ('Error al obtener los productos');
        }
        return await response.json();
    } catch (error) {
        console.log('Error al obtener los productos: ' + error.message);
        throw error;
    }   
}