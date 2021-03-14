import React from 'react';
import './footer.scss'
import logo from '../../img/sincere_logo_lp.png'

const Footer = () =>{
    return(
        <div className='footer'>
            <div className='footer-style'>
                <img className='logo' src={logo} alt="logo"/>
                <div className='content-footer'>
                    <section className='position-R'>
                        <h4 className='title-footer'>Документы</h4>
                        <div>
                            <ul>
                                <li className='footer-link'>Условия использования</li>
                                <li className='footer-link'>Политика конфиденциальности</li>
                            </ul>
                        </div>
                    </section>
                    <section className='position-R right'>
                        <h4 className='title-footer'>Контакты</h4>
                        <div className='icon-footer-container'>
                            <div className='icon-footer'>
                                <i className="fab fa-facebook-f"></i>
                            </div>
                            <div className='icon-footer'>
                                <i className="fab fa-instagram"></i>
                            </div>
                        </div>
                    </section>
                </div>

            </div>

        </div>
    )
};

export default Footer;