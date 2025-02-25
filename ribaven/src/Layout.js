import { Navbar } from "./components/Navbar"
import { Outlet } from "react-router-dom"
import { Footer } from "./components/Footer"

export function Layout() {
    return (
        <>
            <Navbar/>
            <main>
                <Outlet/>
            </main>
            <Footer/>

        </>
    )
}