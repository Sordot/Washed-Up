import {Outlet, Link} from "react-router-dom"

const Layout = () => {
    return <>
        <nav>
            <div>
                <Link to="/">Home</Link>
            </div>
            <div>
                <Link to="/team">Our Team</Link>
            </div>
            <div>
                <Link to="/faq">FAQ</Link>
            </div>
            <div>
                <Link to="/apply">Apply</Link>
            </div>
        </nav>

        <Outlet/>
    </>
}

export default Layout;