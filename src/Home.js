import { useEffect, useState } from "react"
import Bloglist from "./Bloglist";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);

    const [name, setName] = useState('ed');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setIsPending(false);
                setBlogs(data);
            })
        }, 1000);
    }, []);

    return (
        <div className="home">
            { isPending && <div>Loading...</div>}
            {blogs && <Bloglist blogs={blogs} />}
        </div>
    )
}   

export default Home