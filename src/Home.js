import { useState } from "react"

const Home = () => {
    const [name, setName] = useState('ed');
    const [age, setAge] = useState(41);

    const handleClick = () => {
        setName('baste');
        setAge(8);
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}   

export default Home