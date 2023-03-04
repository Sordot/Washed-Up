import '../Navbar.css'
import logo2 from '../assets/logo2.png'
import { Link } from "react-router-dom";


const Navbar = () => {

    return <>
        <header>
            <Link to="/"><img className="logo" src={logo2} alt="Washed Up" /></Link>
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