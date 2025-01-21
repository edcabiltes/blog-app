import { useEffect, useState } from "react"
import Bloglist from "./Bloglist";

const Home = () => {
    const [blogs, setBlogs] = useState(null);

    const [name, setName] = useState('ed');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            }).then(data => {
                setBlogs(data);
            })
    }, []);

    return (
        <div className="home">
            {blogs && <Bloglist blogs={blogs} />}
        </div>
    )
}   

export default Home