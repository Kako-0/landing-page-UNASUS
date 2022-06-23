import "./styles.css";
import Accessible from '../../common/assets/Accessible.svg';
import MapaDoSite from '../../common/assets/Mapa-do-Site.svg';
import Contrast from '../../common/assets/Contrast.svg';
import Facebook from '../../common/assets/Facebook.svg';
import Instagram from '../../common/assets/Instagram.svg';

function Accessibility() {
    return (
        <ul className="accessibilityContainer">
            <li>
                <img src={Accessible} alt="accessible" />
                <p>Acessibilidade</p>
            </li>
            <li>
                <img src={Contrast} alt="contraste" />
                <p>Contraste</p>
            </li>
            <li>
                <img src={MapaDoSite} alt="mapa do site" />
                <p>Mapa do Site</p>
            </li>
            <li className="accessibility-socialMedia">
                <img src={Facebook} alt="facebook logo" />
                <img src={Instagram} alt="instagram logo" />
            </li>
        </ul>
    )
}

export default Accessibility;