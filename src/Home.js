import { useState } from "react"
import Bloglist from "./Bloglist";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My project', body: 'lorem ipsum...', author: 'ed', id: 1 },
        { title: 'My book collection', body: 'lorem ipsum...', author: 'baste', id: 2 },
        { title: 'What I learned', body: 'lorem ipsum...', author: 'makoy', id: 3 }
    ]);

    return (
        <div className="home">
            <Bloglist blogs={blogs} title="All Blogs" />
        </div>
    )
}   

export default Home