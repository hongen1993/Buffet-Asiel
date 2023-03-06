import "./Footer.scss"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const Footer = () => {
    const [moveIn, setMoveIn] = useState(false)
    useEffect(() => {
        const height = window.innerHeight;
        if (height >= 650 && height < 750) {
            window.addEventListener("scroll", () => {
                if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                    setMoveIn(true)
                } else {
                    setMoveIn(false)
                }
            })
        }
        else {
            setMoveIn(true)
        }
    }, [])
    return (
        <>
            <div className="footer__background"></div>
            <div className={`footer ${moveIn ? 'moveUp' : ''}`} id='footer'>
                <p className="footer__text">© 2023 |  Todos los derechos reservados.</p>
                <p className="footer__logo">Buffet Asiel</p>
                <p className="footer__text-b">Developed by <Link to='https://www.linkedin.com/in/hongen-shyu-barcel/'>Hongen Shyu Barcel</Link></p>
            </div>
        </>
    )
}

export default Footer