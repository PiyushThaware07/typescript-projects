import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
    return (
        <nav className="navbar h-16 w-full bg-black text-white">
            <ul className="flex flex-nowrap items-center gap-6 h-full px-10">
                <li>
                    <Link to={'/'} className="text-sm font-medium capitalize">functional components</Link>
                </li>
                <li>
                    <Link to={'/class'} className="text-sm font-medium capitalize">Class components</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;