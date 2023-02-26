import "./Button.scss"
import { HashLink } from "react-router-hash-link"

const Button = ({ buttonStyle, link, text }) => {
    return (
        <button className={`button ${buttonStyle}`}>
            <HashLink to={link}>{text}</HashLink>
        </button>
    )
}
export default Button