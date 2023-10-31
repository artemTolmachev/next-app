import {create} from 'zustand';
import { getAllPosts, getPostsBySerch} from '@/services/getPosts';


type UsePosts = {
    posts: any[];
    loading: boolean;
    getAllPosts: () => Promise<void>;
    getPostsBySearch: (value: string) => Promise<void>;
}
//создаем хук
export const usePosts = create<UsePosts>()((set) => ({
posts: [],
loading: false,
getAllPosts: async () => {
    set({loading: true})
    const posts = await getAllPosts()
    set({posts, loading: false})
    },
getPostsBySearch: async  (search) => {
        set({loading: true})
        const posts = await getPostsBySerch(search)
        set({posts, loading: false})
    }
}));

