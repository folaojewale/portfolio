import { Link } from "react-router-dom"

const Navbar  = () =>{
    return(
        <header>
        <div className="container">
            <Link to='/'><h1>Fola Ojewale</h1></Link>
            <div className="spacing">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        </div>
        </header>
    )
}

export default Navbar 