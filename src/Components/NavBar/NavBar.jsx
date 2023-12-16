import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import Link from "../Link/Link";
import { useState } from "react";
const NavBar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/products', name: 'Products' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/dashboard', name: 'Dashboard' }
    ];

    return (
        <div className="bg-yellow-200 text-black p-6">
            <div className="md:hidden text-2xl  " onClick={() => setOpen(!open)}>
                {
                    open === true ? <IoMdClose /> : <AiOutlineMenu className=" " />
                }
            </div>

            <ul className={`md:flex duration-1000 absolute md:static bg-yellow-200 px-6  ${open ? 'top-14' : '-top-60'}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </div>
    );
};

export default NavBar;