import { useState } from "react"
import Bloglist from "./Bloglist";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My project', body: 'lorem ipsum...', author: 'ed', id: 1 },
        { title: 'My book collection', body: 'lorem ipsum...', author: 'baste', id: 2 },
        { title: 'What I learned', body: 'lorem ipsum...', author: 'ed', id: 3 }
    ]);

    return (
        <div className="home">
            <Bloglist blogs={blogs} title="All Blogs" />
            <Bloglist blogs={blogs.filter(blog => blog.author === 'ed')} title="Ed's Blogs" />
        </div>
    )
}   

export default Home