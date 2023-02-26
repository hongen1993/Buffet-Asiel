import "./HeaderSection.scss"
import { HashLink } from "react-router-hash-link"
import backgroundVideo from "../../assets/videos/buffet-asiel.mp4"
import backgroundVideoB from "../../assets/videos/buffet-asiel.webm"

const HeaderSection = () => {
    return (
        <section className="header-section section">
            <div className="header-section__video--container">
                <video className="header-section__video" autoPlay muted loop>
                    <source src={backgroundVideo} videotype="video/mp4" />
                    <source src={backgroundVideoB} videotype="video/webm" />
                    Your browser is not supported!
                </video >
            </div>
            <div className="header-section__hero">
                <h2 className="header-section__title--sm">Disfruta de nuestra gran variedad de platos</h2>
                <h2 className="header-section__title--bg">Marisco, Carnes, Sushi</h2>
                <button className="header-section__button">
                    <HashLink to='#about-us-section'>Y mucho más... </HashLink>
                </button>
            </div>
        </section>
    )
}
export default HeaderSection