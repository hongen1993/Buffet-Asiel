import "./Modal.scss"
import { BsArrowDownCircle } from 'react-icons/bs';
import { BsArrowUpCircle } from 'react-icons/bs';

import { useState } from "react";

const Modal = () => {

    const [moveDown, setMoveDown] = useState(false)

    const handleDown = (e) => {
        e.preventDefault();
        setMoveDown(true)
    }

    const handleUp = (e) => {
        e.preventDefault();
        setMoveDown(false)
    }

    const foodPrice =
        <>
            <p>Almuerzo(Lunes - Viernes): <span>14,95€</span></p>
            <p>Cena(Lunes - Jueves): <span>14,95€</span></p>
            <p>Viernes noche, sábados, domingos, festivos y vísperas de festivo: <span>17,95€</span></p>
            <p>Niños menores de 4 años:  <span>3,00€</span></p>
            <p>Niños menores de 8 años de hasta 130cm de altura: <span>7,95€</span></p>
            <p>(Bebidas No Incluidas)</p>
            <p>Por cada persona que no consuma mínimo una bebida deberá abonar un 1 euro extra</p>
        </>

    const drinkPriceA =
        <>
            <h4>Cervezas</h4>
            <p>Caña<span>2,50€</span></p>
            <p>Jarra de cerveza 1/2L <span>3,50€</span></p>
            <p>Jarra de cerveza 1L <span>6,95€</span></p>
            <p>San Miguel, 0'0, Radler <span>2,60€</span></p>
            <p>San Miguel Tostada 0'0 <span>2,95€</span></p>
            <p>Mahou <span>2,95€</span></p>
            <p>Alhambra 1925 <span>3,10€</span></p>

            <h4>Refrescos & Zumos</h4>
            <p>Refrescos <span>2,75€</span></p>
            <p>Nestea & Aquarius <span>2,80€</span></p>
            <p>Zumo de botellin <span>2,20€</span></p>
            <p>Agua mineral 1/2L <span>2,25€</span></p>
            <p>Agua mineral con gas <span>2,50€</span></p>

            <h4>Copa de vino</h4>
            <p>Copa de vino <span>2,80€</span></p>
            <p>Copa de vino dulce <span>2,50€</span></p>
            <p>Tinto de verano <span>2,65€</span></p>
            <p>Jarra de tinto de verano 1L <span>8,95€</span></p>
            <p>Jarra de sangría 1L <span>9,95€</span></p>

            <h4>Café & Té</h4>
            <p>Cafe normal <span>1,60€</span></p>
            <p>Cafe con leche <span>1,85€</span></p>
            <p>Café bombón <span>1,80€</span></p>
            <p>Carajillo <span>2,00€</span></p>
            <p>Café irlandés <span>5,00€</span></p>
            <p>Infusión <span>1,60€</span></p>
            <p>Té chino/negro <span>1,95€</span></p>
        </>

    const drinkPriceB =
        <>
            <h4>Vino tinto</h4>
            <p>Tinto de la casa <span>9,95€</span></p>
            <p>Marqués de Cáceres Crianza <span>18,95€ / 10,90€</span></p>
            <p>Siglo<span>13,95€</span></p>
            <p>Proto joven <span>17,95€</span></p>
            <p>Celeste roble <span>17,95€</span></p>
            <p>Sangre de toro <span>12,95€</span></p>
            <p>Faustino VII (Blanco y rosado) <span>11,95€ / 8,95€</span></p>
            <p>Campo viejo Crianza <span>14,95€</span></p>

            <h4>Vino blanco</h4>
            <p>Blanco de la casa <span>9,95€</span></p>
            <p>Barbadillo <span>12,95€</span></p>
            <p>Barbadillo 1/2 <span>5,95€</span></p>
            <p>Viña Sol<span>14,95€ / 9,50€</span></p>
            <p>Martín Codax <span>15,95€ & 9,50€</span></p>
            <p>Monopole <span>13,95€</span></p>
            <p>Mantel Blanco <span>13,95€</span></p>
            <p>Chardonnay <span>12,95€</span></p>

            <h4>Vino rosado</h4>
            <p>Rosado de la casa <span>9,95€</span></p>
            <p>Enate Rosado <span>16,95€</span></p>
            <p>Lambrusco <span>11,95€</span></p>
            <p>Peñascal <span>10,95€</span></p>
            <p>Mateus <span>11,95€</span></p>
            <p>Campo viejo <span>11,95€</span></p>

            <h4>Cavas</h4>
            <p>Freixenet <span>13,95€</span></p>
            <p>Anna Codorniu <span>18,95€</span></p>
            <p>Codorniu extra <span>13,95€</span></p>
            <p>Juve & Camps Rosé <span>21,95€</span></p>
            <p>Dubois rosada seco <span>11,95€</span></p>
        </>
    return (
        <div className="popup" id="popup">
            <div className={`popup__content ${moveDown ? 'move-down' : ''}`}>
                <a href="#footer" className="popup__close">&times;</a>
                <div className="popup__food">
                    <h3>Precios del buffet</h3>
                    {foodPrice}
                    <div className="popup__down"><BsArrowDownCircle onClick={handleDown} /></div>
                </div>
                <div className="popup__up"><BsArrowUpCircle onClick={handleUp} /></div>
                <div className="popup__drink-a">
                    {drinkPriceA}
                </div>
                <div className="popup__drink-b">
                    {drinkPriceB}
                </div>
            </div>
        </div>
    )
}

export default Modal