import Logo from '../../assets/Logo.svg';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

import './Footer.css'

import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'; 

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="al-center d-flex jc-space-between">
                    <div className="footer-n1-col">
                        <Link to="/" className="logo"><img src={Logo} alt="img" /></Link>
                        <p className="grey-1-color">
                            oferecemos sofisticação, sabor e excelência para tornar seu evento inesquecível. <br />
                            Criamos experiências únicas para casamentos, aniversários e eventos corporativos.
                        </p>
                        <div className="social-links">
                            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                            <a href="#" aria-label="Instagram"><FaInstagram /></a>
                            <a href="#" aria-label="Twitter"><FaTwitter /></a>
                        </div>
                    </div>
                    <div className="d-flex mobile-fd-column">
                        <div className="footer-col">
                            <h3>Pages</h3>
                            <ul className="primary-color">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h3>Contact</h3>
                            <p className="grey-1-color">R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030</p>
                            <p className="grey-1-color">contact@buffethouse.com.br</p>
                            <p className="grey-1-color">+55 (85) 999123-4567</p>
                        </div>
                    </div>
                </div>
                <div className="al-center d-flex jc-space-between mt-3">
                    <p className="grey-1-color">Copyright © Wesley S - 2026</p>
                    <div>
                        <Button variant="primary" ></Button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer