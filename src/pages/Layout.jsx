import {Outlet} from "react-router-dom"
import Navbar from "../components/Navbar";

const Layout = () => {
    return <>
        <div className="layout-container">
            <Navbar />
            <div className="outlet-container">
                <Outlet />
            </div>
            
        </div>
    </>
}

export default Layout;