import React from 'react';
import Center from './layout/Center';

function Footer() {
    return (
        <footer className="footer">
            <Center>
                <div className='w-[90vw] flex flex-row items-center justify-evenly mb-8'>
                    <div className="footer-contact">
                        <h3 className='content_text'>Date contact</h3>
                        <p className='content_text'>Nume: Lăzărescu Alexandru</p>
                        <p className='content_text'>Email: dev.lazarescu.alexandru@gmail.com</p>

                    </div>

                    <div className="footer-social">
                        <h3 className='content_text'>Social</h3>
                        <ul>
                            <li>
                                <a className='content_text' href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                                    LinkedIn
                                </a>
                            </li>
                            <li>
                                <a className='content_text' href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a className='content_text' href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                                    GitHub
                                </a>
                            </li>
                            {/* Add more social links as needed */}
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h3 className='content_text'>Secțiuni</h3>
                        <ul>
                            <li>
                                <a className='content_text' href="/">Acasă</a>
                            </li>
                            <li>
                                <a className='content_text' href="/about">Despre mine</a>
                            </li>
                            <li>
                                <a className='content_text' href="/portfolio">Portfolio</a>
                            </li>
                            <li>
                                <a className='content_text' href="/contact">Contact</a>
                            </li>
                            {/* Add more page links as needed */}
                        </ul>
                    </div>

                </div>
                <div className="footer-copyright">
                    <p className='content_text'>&copy; 2023 LĂZĂRESCU ALEXANDRU. Toate drepturile rezervate.</p>
                </div>
            </Center>
        </footer>
    );
}

export default Footer;