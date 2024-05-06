const urlCommnents = 'https://dummyjson.com/comments'

export async function getComments() {

    try {
        const response = await fetch(urlCommnents);
        if (!response.ok) {
            throw new Error('Error to get comments');
        }
        return await response.json();
    } catch (error) {
        console.log('Error to get comments:' + error.message);
        throw error;
    }
}