import "./AboutUsSection.scss"
import fotoB from "../../assets/images/about-b.jpg"
import Button from "../../components/Button/Button"
import { useState, useEffect } from "react"

const AboutUsSection = () => {
    const [moveIn, setMoveIn] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setMoveIn(true)
            }
        })
    }, [])

    return (
        <section className="about-us-section" id='about-us-section'>
            <div className={`about-us-section__content ${moveIn ? 'moveInLeft' : ''}`}>
                <h3 className="about-us-section__title">VIVE UNA </h3>
                <h2 className="about-us-section__title">EXPERIENCIA ÚNICA</h2>
                <div className="divider">.</div>
                <p className="about-us-section__text">
                    Descubre la esencia de un buffet en un ambiente inigualable.
                    Una original y variada propuesta gastronómica que no te dejará indiferente.
                </p>
                <p className="about-us-section__text-b">¡En Buffet Asiel te estamos esperando!</p>
                <Button buttonStyle={'about-us-section__button'} link={'#footer'} text={'Quiero reservar'} />
                <img src={fotoB} alt="asiel" />
            </div>
        </section>
    )
}
export default AboutUsSection