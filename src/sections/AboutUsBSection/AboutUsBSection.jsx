import "./AboutUsBSection.scss"
import foto from "../../assets/images/food-c.jpg"
import Button from "../../components/Button/Button"
import { useState, useEffect } from "react"

const AboutUsBSection = () => {
    const [moveIn, setMoveIn] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 350) {
                setMoveIn(true)
            }
        })
    }, [])

    return (
        <section className="about-us-b-section">
            <div className={`about-us-b-section__content ${moveIn ? 'moveInRight' : ''}`}>
                <div className="about-us-b-section__image">
                    <img src={foto} alt="asiel" />
                </div>
                <h3 className="about-us-b-section__title">Nuestra oferta </h3>
                <h2 className="about-us-b-section__title">Gastronómica</h2>
                <div className="divider">.</div>
                <p className="about-us-b-section__text">Con identidad propia. Una mezcla perfecta de los mejores platos occidentales y asiáticos.</p>
                <Button buttonStyle={'about-us-b-section__button'} link={'#footer'} text={'Horarios y precios'} />
            </div>
        </section>
    )
}
export default AboutUsBSection