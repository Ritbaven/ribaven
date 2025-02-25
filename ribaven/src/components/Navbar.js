import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import headerIcon from "../assets/headerItemIcon.png";


export function Navbar() {
    const location = useLocation(); // Get the current path
    const [isOpen, setIsOpen] = useState(false); // State for mobile menu

    return (
        <div className="fixed top-0 left-0 w-full bg-black/65 z-50 backdrop-blur-sm pl-4 pr-4 p-3">
            <nav className="flex justify-between items-center">
                {/* Logo / Title */}
                <img src={headerIcon} alt="logo" className="w-[32px] h-[32px]" />


                {/* Mobile Menu Button */}
                <button 
                    className="text-white text-3xl md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>

                {/* Navigation Links (Desktop & Mobile) */}
                <ul className={`absolute md:static top-16 left-0 w-full md:w-auto md:flex space-y-4 md:space-y-0 md:space-x-6 text-slate-300 bg-black/80 md:bg-transparent p-6 md:p-0 rounded-lg md:rounded-none transition-all duration-300 ${isOpen ? "block" : "hidden"}`}>
                    {[
                        { name: "Home", path: "/" },
                        { name: "Contact", path: "/contact" },
                        { name: "Interests", path: "/interests" },
                        { name: "Projects", path: "/projects" }
                    ].map((item) => (
                        <li key={item.path}>
                            <Link
                                to={item.path}
                                className={`block text-center md:inline-block px-4 py-2 rounded-full transition-all duration-200 ${
                                    location.pathname === item.path
                                        ? "bg-white text-black shadow-lg"
                                        : "hover:text-white"
                                }`}
                                onClick={() => setIsOpen(false)} // Close menu on click
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}
