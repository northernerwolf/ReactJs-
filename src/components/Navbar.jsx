import "./navbar.css"

const navbar = () => {
  return (
    <div className="navbar">
        <div className="navContainer">
            <span className="logo">loop</span>
            <div className="navItem">
                <button className="navBurron">Register</button>
                <button className="navBurron">Login</button>

            </div>
        </div>
    </div>
  )
}

export default navbar