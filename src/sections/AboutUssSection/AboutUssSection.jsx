import "./AboutUssSection.scss"
import { useState, useEffect } from "react"
import Button from "../../components/Button/Button"

import foto from "../../assets/images/food-c.jpg"
import fotoB from "../../assets/images/about-b.jpg"

const AboutUssSection = () => {

    const [moveInRight, setMoveInRight] = useState(false)
    const [moveInRightB, setMoveInRightB] = useState(false)
    const [moveInLeft, setMoveInLeft] = useState(false)
    const [moveInLeftB, setMoveInLeftB] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 350) {
                setMoveInLeft(true)
                setMoveInRight(true)
            }
        })
        window.addEventListener("scroll", () => {
            if (window.scrollY > 800) {
                setMoveInRightB(true)
                setMoveInLeftB(true)
            }
        })
    }, [])

    return (
        <section className="about-uss-section">
            <div className={`about-uss-section-a ${moveInLeft ? 'moveIn' : ''}`}>
                <h3 className="about-uss-section-a__title">Vive una</h3>
                <h2 className="about-uss-section-a__title">Experiencia única</h2>
                <div className="divider">.</div>
                <p className="about-uss-section__text">
                    Descubre la esencia de un buffet en un ambiente inigualable.
                    Una original y variada propuesta gastronómica que no te dejará indiferente.
                </p>
                <p className="about-uss-section__text-b">¡En Buffet Asiel te estamos esperando!</p>
                <Button buttonStyle={'about-uss-section-a__button'} link={'#footer'} text={'Quiero reservar'} />
            </div>
            <div className={`about-uss-section-b ${moveInRight ? 'moveIn' : ''}`}>
                <img src={foto} alt="asiel" />
            </div>
            <div className={`about-uss-section-c ${moveInLeftB ? 'moveIn' : ''}`}>
                <img src={fotoB} alt="asiel" />
            </div>
            <div className={`about-uss-section-d ${moveInRightB ? 'moveIn' : ''}`}>
                <h3 className="about-uss-section-d__title">Nuestra oferta </h3>
                <h2 className="about-uss-section-d__title">Gastronómica</h2>
                <div className="divider">.</div>
                <p className="about-uss-section__text">Con identidad propia. Una mezcla perfecta de los mejores platos occidentales y asiáticos.</p>
                <Button buttonStyle={'about-uss-section-d__button'} link={'#footer'} text={'Horarios y precios'} />
            </div>
        </section>
    )
}

export default AboutUssSection