import {Posts} from '../components/Posts';
import { PostSearch } from '../components/PostSearch';
import { usePosts } from '../store';
import { shallow } from 'zustand/vanilla/shallow';
import {useEffect} from 'react'


export default  function Blog(){
    // const posts = await getData();

    // const[posts, setPosts] = useState<any[]>([]);
    // const[loading, setLoading] = useState(true);

  

  

    return (
    <>
        <PostSearch/>
        <Posts />
    </>
    )
}
