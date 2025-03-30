
function Nav() {
  return (
    <nav className="main-nav" style={{backgroundColor: "rgb(228, 181, 241) ", fontSize: "2rem", fontWeight: "bold", fontFamily: "Arial, sans-serif", color: "rgb(193, 71, 227) "}}>{/*how to work css*/}
      <ul className="nav-list" style={{listStyleType: "none", display: "flex", justifyContent: "space-around", padding: "0"}}> 
        <li>Home</li>
        <li>Articles</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}
export default Nav