import { Link, useLocation } from "react-router-dom";

export function Footer(){
    return (
        <div className="">
            <h2 className="text-center text-2xl font-bold text-black p-10 bg-gray-100">
                © {new Date().getFullYear()} Ricardo Ibaven. All Rights Reserved.
            </h2>
        </div>
    )
}