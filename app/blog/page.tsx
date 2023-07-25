import { chownSync } from "fs";
import Link from "next/link";

async function getData(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
    // next obj ceches and checs for new posts
        next: {
            revalidate: 60
        }
    });
    return response.json();
}


export default async function Blog(){
    const posts = await getData();
    return (
        <>
            <h1>Blog</h1>
            {posts.map((post: any) => (
                <li key={post.id}>
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </li>
            ))}
        </>
    )
}
