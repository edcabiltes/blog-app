import { useEffect, useState } from "react"
import Bloglist from "./Bloglist";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My project', body: 'lorem ipsum...', author: 'ed', id: 1 },
        { title: 'My book collection', body: 'lorem ipsum...', author: 'baste', id: 2 },
        { title: 'What I learned', body: 'lorem ipsum...', author: 'ed', id: 3 }
    ]);

    const [name, setName] = useState('ed');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log('use effect ran');
        console.log(name);
    }, [name]);

    return (
        <div className="home">
            <Bloglist blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
            <button onClick={() => setName('makoy')}>change name</button>
            <p>{ name }</p>
        </div>
    )
}   

export default Home