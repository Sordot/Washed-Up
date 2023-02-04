import { Link } from "react-router-dom";

const Navbar = () => {

    return <>
        <nav>
            <Link to="/">Washed Up</Link>
            <Link to="/team">Our Team</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/apply">Apply</Link>
        </nav>
    </>

}

export default Navbar;