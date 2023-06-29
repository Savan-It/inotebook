import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    let location = useLocation();

    React.useEffect(() => {
        // Google Analytics
    }, [location]);
    return (
        <>
            <nav className='px-5 py-3 sticky top-0 z-50 shadow-lg flex text-white justify-between bg-custom_grey-950 bg-opacity-4'>
                <h1 className='text-2xl font-bold px-4'><Link to='/'>GoodNotes</Link> </h1>
                <ul className='flex align-middle pt-1 px-4'>
                    <li className={`px-3  ${location.pathname === "/" ? "opacity-100" : "opacity-70"} hover:opacity-100`}>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className={`px-3  ${location.pathname === "/about" ? "opacity-100" : "opacity-70"} hover:opacity-100`}>
                        <Link to='/about'>About</Link>
                    </li>
                    <li className={`px-3  ${location.pathname === "/contact" ? "opacity-100" : "opacity-70"} hover:opacity-100`}>
                        <Link to='/contact'>Contact Us</Link>
                    </li>
                </ul>

            </nav>

        </>
    )
}

export default Navbar