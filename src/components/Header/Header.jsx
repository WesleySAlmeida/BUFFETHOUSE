import './Header.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';

function Header() {
    return (
        <header>
            <div className="container">
                <div className="al-center d-flex jc-space-between">
                    <Link to="/" className="logo"><img src={Logo} alt="img" /></Link>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header