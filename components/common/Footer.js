import React from 'react';
import Link from 'next/link';


function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <h4>Lăzărescu Alexandru</h4>
                </div>
                <div className="footer-links">
                    <ul>
                        <li><Link href="/"><p>Home</p> </Link></li>
                        <li><Link href="/about"><p>About Us</p> </Link></li>
                        <li><Link href="/services"><p>Services</p> </Link></li>
                        <li><Link href="/contact"><p>Contact</p> </Link></li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <h3>Contactează-mă</h3>
                    <p className='main_text'>Email: dev.lazarescu</p>
                    <p className='main_text'>Phone: +1 (123) 456-7890</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p className='sec_text'>&copy; {new Date().getFullYear()} Lăzărescu Alexandru.Toate drepturile rezervate</p>
            </div>
        </footer >
    );
}

export default Footer;