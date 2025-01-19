import { useEffect, useState } from "react"
import Bloglist from "./Bloglist";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My project', body: 'lorem ipsum...', author: 'ed', id: 1 },
        { title: 'My book collection', body: 'lorem ipsum...', author: 'baste', id: 2 },
        { title: 'What I learned', body: 'lorem ipsum...', author: 'ed', id: 3 }
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log('use effect ran');
        console.log(blogs);
    })

    return (
        <div className="home">
            <Bloglist blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
        </div>
    )
}   

export default Home