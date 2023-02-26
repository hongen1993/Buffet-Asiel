import "./Navbar.scss"
import { useState, useEffect } from "react"
const Navbar = () => {
    const [scroll, setScroll] = useState('top')
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY < 600) {
                setScroll('top')
            }
            if (window.scrollY > 600) {
                setScroll('scrolled')
            }
            if (window.scrollY > 1800) {
                setScroll('top')
            }
            if (window.scrollY > 2300) {
                setScroll('scrolled')
            }
            if (window.scrollY > 2900) {
                setScroll('scrolled bottom')
            }
        })
    }, [])

    return (
        <div className={`navbar ${scroll}`}>
            <h2 className="navbar__heading">Buffet Asiel</h2>
        </div>
    )
}
export default Navbar