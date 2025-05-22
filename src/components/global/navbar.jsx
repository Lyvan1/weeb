import React, {useState} from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    /*State menu */
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <section className={'pt-[24px] pb-[24px]'}>
            <div className="flex justify-center bg-[#181e2c] text-white py-4 px-6 relative rounded-[20px]">
                <div className="w-full max-w-[1000px] flex items-center justify-between">

                    {/* Side part*/}
                    <div className={'flex justify-between w-[293px]'}>
                        {/* Logo */}
                        <div className="text-xl font-bold">
                            <Link to={'/'}>Weeb</Link>
                        </div>

                        {/* Desktop Links */}
                        <div className="hidden md:flex items-center space-x-6 font-medium">
                            <Link to={'/about'}>About us</Link>
                            <Link to={'/contact'}>Contact</Link>
                        </div>
                    </div>

                    {/* Desktop Auth */}
                    <div className="hidden md:flex items-center space-x-4 font-medium">
                        <a href="#" className="hover:text-gray-300">Log In</a>
                        <a href="#"
                           className="bg-[var(--weebPrimaryColor)] hover:bg-purple-700 text-white px-4 py-2 rounded-lg shadow-md">
                            Join Now
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden flex items-center px-3 py-2 border bg-[var(--weebPrimaryColor)] border-[var(--weebPrimaryColor)] rounded  hover:text-white hover:border-white"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div
                        className="md:hidden w-1/2 max-w-[1000px] flex items-center flex-col mt-[70px] space-y-2 font-medium absolute bg-[var(--weebPrimaryColor)]">
                        <Link to={'/about'}>About us</Link>
                        <Link to={'/contact'}>Contact</Link>

                        <div className="w-1/2 h-[1px] bg-white my-4"/>

                        <a href="#" className="hover:text-gray-300">Log In</a>
                        <a href="#"
                           className="bg-[var(--weebPrimaryColor)] hover:bg-purple-700 px-4 py-2 rounded-lg  w-fit">
                            Join Now
                        </a>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Navbar;
