import './styles.css';
import Logo from '../../common/assets/logo.svg';
import NameLogo from '../../common/assets/name-logo.svg';
import Accessibility from '../acessibility/Acessibility';

function Header() {
    return (
        <>
            <Accessibility />
            <header className='headerContainer'>
                <div className='logo'>
                    <img src={Logo} alt="logo" />
                    <img src={NameLogo} alt="saite" />
                </div>
                <ul className='headerMenu'>
                    <li>Quem Somos</li>
                    <li>Nossas Soluções</li>
                    <li>Nossos Projetos</li>
                    <li>Nossa Equipe</li>
                    <li>Notícias</li>
                    <li>Contato</li>
                </ul>
            </header>
        </>
    );
}

export default Header;