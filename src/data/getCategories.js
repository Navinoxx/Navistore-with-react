const urlCategories = 'https://dummyjson.com/products/categories'

export async function getCategories() {

    try {
        const response = await fetch(urlCategories);
        if (!response.ok) {
            throw new Error('Error to get categories');
        }
        return await response.json();
    } catch (error) {
        console.log('Error to get categories:' + error.message);
        throw error;
    }
}