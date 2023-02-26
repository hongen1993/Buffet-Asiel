import "./ContactUsSection.scss"
import imgTop from "../../assets/images/ft-arrow-top.png"
import imgBottom from "../../assets/images/ft-arrow-bottom.png"
import { Link } from "react-router-dom"
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';

const ContactUsSection = () => {
    return (
        <section className="contact-us-section section" id='contact-us-section'>
            <h3>Estamos muy cerca</h3>
            <div className="contact-us-section__map">
                <iframe title='contact-us' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3200.716972896222!2d-4.49157690672759!3d36.65725891613952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72fa2cfbfa53f7%3A0xc475acb26b1d0cea!2sBuffet%20Asiel!5e0!3m2!1ses!2ses!4v1677335699014!5m2!1ses!2ses" width="100%" height="100%" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="contact-us-section__content">
                <div className="contact-us-section__title"></div>
            </div>
            <div className="contact-us-section__bottom">
                <div className="contact-us-section__schedule">
                    <div className="contact-us-section__schedule-wrap">
                        <div className="img-top">
                            <img src={imgTop} alt="top" />
                        </div>
                        <h3>Horarios</h3>
                        <p>Almuerzo: 13:00 - 16:30</p>
                        <p>Cena: 20:00 - 23:30</p>
                        <button className="contact-us-section__button">
                            <a href='#popup'>Nuestros precios</a>
                        </button>
                    </div>
                </div>
                <div className="contact-us-section__divider">
                    <svg width="100%" height="100px" viewBox="0 0 1280 140" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"><g fill="#222222"><path d="M0 0l64.8 38.69 91.2-3.18 95.45 34.84 120.04.24 71.5 33.35 90.08-3.91 106.91 37.62 102.38-37.17 85.55 10.65 88.11-7.19 75.95-38.66 73.21 5.31 66.78-22.1 77-.42 71-48.07v140H0V0z" /></g></svg>
                </div>
                <div className="contact-us-section__address">
                    <h4>Ubicación</h4>
                    <p>Ctra. Coín, 1, 29140</p>
                    <p>Churriana, Málaga</p>
                </div>
                <div className="contact-us-section__contact">
                    <h4>Reserva ya</h4>
                    <a href="tel:952 62 13 99">Telefono: 952 62 13 99</a>
                    <p>Whatsapp: 684 02 26 57</p>
                </div>
                <div className="contact-us-section__icons">
                    <Link to='https://instagram.com/asielbuffet?igshid=YmMyMTA2M2Y='><AiOutlineInstagram /></Link>
                    <Link to='https://www.facebook.com/BuffetAsielGrillHouse/?locale=es_ES'><FaFacebookF /></Link>
                </div>
                {/* <div className="footer-background"></div> */}
            </div>
        </section>
    )
}
export default ContactUsSection