import { useState } from "react"

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My project', body: 'lorem ipsum...', author: 'ed', id: 1 },
        { title: 'My book collection', body: 'lorem ipsum...', author: 'baste', id: 2 },
        { title: 'What I learned', body: 'lorem ipsum...', author: 'makoy', id: 3 }
    ]);

    return (
        <div className="home">
            {blogs.map(blog => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                </div>
            ))}
        </div>
    )
}   

export default Home