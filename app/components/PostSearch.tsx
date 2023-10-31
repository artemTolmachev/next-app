'use client'
import { FormEventHandler, useState } from "react";
import { usePosts } from "../store";


const PostSearch = () => {

    const [search, setSearch] = useState('');

    const getPostsBySerch = usePosts(state => state.getPostsBySearch)

    const handlSubmit : FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        const posts = await getPostsBySerch(search)
    }
    return(
        <>
        <form onSubmit={handlSubmit}>
            <input 
            type="search"
            placeholder="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
        </form>
        <button type="submit">Search</button>
        </>
    )
}
export {PostSearch}