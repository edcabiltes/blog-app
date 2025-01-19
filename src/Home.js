const Home = () => {
    const handleClick = (e) => {
        console.log('hello', e);
    }

    const handleClickAgain = (name, e) => {
        console.log('hello ' + name, e.target);
    }

    return (
        <div className="home">
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => handleClickAgain('ed', e)}>Click me again</button>
        </div>
    )
}   

export default Home