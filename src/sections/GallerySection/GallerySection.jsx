import "./GallerySection.scss"
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { useState, useEffect } from "react"

import imageA from '../../assets/images/image-a.jpg'
import imageB from '../../assets/images/image-b.jpg'
import imageC from '../../assets/images/image-c.jpg'
import imageD from '../../assets/images/image-d.jpg'
import imageE from '../../assets/images/image-e.jpg'
import imageF from '../../assets/images/image-f.jpg'
import imageG from '../../assets/images/image-g.jpg'
import imageH from '../../assets/images/image-h.jpg'
import imageI from '../../assets/images/image-i.jpg'
import imageJ from '../../assets/images/image-j.jpg'
import imageK from '../../assets/images/image-k.jpg'
import imageL from '../../assets/images/image-l.jpg'
import imageM from '../../assets/images/image-m.jpg'
import imageN from '../../assets/images/image-n.jpg'
import imageO from '../../assets/images/image-o.jpg'
import imageP from '../../assets/images/image-p.jpg'
import imageQ from '../../assets/images/image-q.jpg'

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '72.5vh',
    backgroundPosition: 'center',
}

const divStyleMobile = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '62.5vh',
    backgroundPosition: 'center',
}

const slideImages = [
    { url: imageA },
    { url: imageB },
    { url: imageC },
    { url: imageD },
    { url: imageE },
    { url: imageF },
    { url: imageG },
    { url: imageH },
    { url: imageI },
    { url: imageJ },
    { url: imageK },
    { url: imageL },
    { url: imageM },
    { url: imageN },
    { url: imageO },
    { url: imageP },
    { url: imageQ },

];

const GallerySection = () => {
    const [moveIn, setMoveIn] = useState(false)
    const [mobile, setMobile] = useState(false)

    useEffect(() => {
        const height = window.innerHeight;
        if (height >= 650 && height < 750) {
            window.addEventListener("scroll", () => {
                if (window.scrollY > 1500) {
                    setMoveIn(true)
                }
            })
        }
        else {
            setMoveIn(true)
        }
        const width = window.innerWidth;
        if (width <= 400) {
            setMobile(true)
        }
    }, [])
    return (
        <section className="gallery-section">
            <div className="gallery-section__content">
                {mobile ?
                    <>
                        <h3>Sobre</h3>
                        <h2>Nosotros</h2>
                    </>
                    :
                    <>
                        <h3>Nuestra</h3>
                        <h2>Galería</h2>
                    </>
                }
                <div className="divider">.</div>
                <p className="gallery-section__text">En Buffet Asiel estamos en constante progreso para alcanzar y superar las expectativas de nuestros clientes.</p>
            </div>
            <div className={`slide-container ${moveIn ? 'moveIn' : ''}`}>
                {mobile ?
                    <>
                        <h3>Nuestra</h3>
                        <h2>Galería</h2>
                    </>
                    :
                    <>
                    </>
                }
                <Slide>
                    {slideImages.map((slideImage, index) => (
                        <div key={index}>
                            <div style={mobile ? { ...divStyleMobile, 'backgroundImage': `url(${slideImage.url})` } : { ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}></div>
                        </div>
                    ))}
                </Slide>
            </div>
        </section>
    )
}
export default GallerySection