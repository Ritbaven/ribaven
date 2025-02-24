import { Link, useLocation } from "react-router-dom";

export function Navbar() {
    const location = useLocation(); // Get the current path

    return (
        <div className="fixed top-0 left-0 w-full bg-black/65 p-3 z-50 backdrop-blur-sm">
            <nav className="flex justify-center items-center">
                <ul className="flex space-x-6 text-slate-300">
                    {[
                        { name: "Home", path: "/" },
                        { name: "Contact", path: "/contact" },
                        { name: "Interests", path: "/interests" },
                        { name: "Projects", path: "/projects" }
                    ].map((item) => (
                        <li key={item.path}>
                            <Link
                                to={item.path}
                                className={`px-4 py-2 rounded-full transition-all duration-200 ${
                                    location.pathname === item.path
                                        ? "bg-white text-black shadow-lg"
                                        : "hover:text-white"
                                }`}
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
