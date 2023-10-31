export const getAllPosts = async () =>  {
    
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    // next obj ceches and checs for new posts
    if(!response.ok) throw new Error('Unable to fetch posts')
    
    return response.json();
} 


export const getPostsBySerch = async (search: string) =>  {

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${search}`)
    // next obj ceches and checs for new posts

    if(!response.ok) throw new Error('Unable to fetch posts')
    
    return response.json();

} 