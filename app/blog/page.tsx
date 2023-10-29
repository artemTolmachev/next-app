'use client';
import {getAllPosts} from '@/services/getPosts';
import { useEffect, useState } from "react";
import Link from "next/link";




export default  function Blog(){
    // const posts = await getData();

    const[posts, setPosts] = useState<any[]>([]);
    const[loading, setLoading] = useState(true);

    useEffect(() => {
        getAllPosts()
        .then(setPosts)
        .finally(() => setLoading(false))
    })
    return (
    <>
        {loading ? (<h3>Loading...</h3>) : (
            <ul>
            {posts.map((post: any) => (
                    <li key={post.id}>
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </li>
                    ))}
            </ul>
        )}
    </>
    )
}
