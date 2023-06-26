const urlCategories = 'https://dummyjson.com/products/categories'

export async function getCategories() {

    try {
        const response = await fetch(urlCategories);
        if (!response.ok) {
            throw new Error('Error al obtener las categorias');
        }
        return await response.json();
    } catch (error) {
        console.log('Error al obtener las categorias:' + error.message);
        throw error;
    }
}