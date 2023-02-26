import '../Navbar.css'
import logo from '../assets/logo.png'
import { Link } from "react-router-dom";


const Navbar = () => {

    return <>
        <header>
            <img className="logo" src={logo} alt="Washed Up" />
            <nav>
                <Link className='navlink' to="/"><h2>Home</h2></Link>
                <Link className='navlink' to="/team"><h2>Our Team</h2></Link>
                <Link className='navlink' to="/faq"><h2>FAQ</h2></Link>
                <Link className='navlink' to="/apply"><h2>Apply</h2></Link>
            </nav>
        </header>
    </>

}

export default Navbar;