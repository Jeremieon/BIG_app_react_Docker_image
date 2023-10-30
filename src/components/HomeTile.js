
const Homepage = ({ onLogout }) => {
    return (
        <div>
        <h2>Welcome to the Homepage</h2>
        <button onClick={onLogout}>Logout</button>
        <div>App 1</div>
        <div>App 2</div>
        <div>App 3</div>
        </div>
    )
}

export default Homepage;