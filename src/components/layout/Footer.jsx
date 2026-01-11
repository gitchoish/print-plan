import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <Link to="/" className="logo">
                            <span className="logo-icon">📋</span>
                            <span className="logo-text">Print & Plan <span className="logo-accent">Lab</span></span>
                        </Link>
                        <p className="footer-tagline">
                            Premium printable templates and guides to help you organize your life,
                            focus on what matters, and build better routines.
                        </p>
                    </div>

                    <div className="footer-links">
                        <h4 className="footer-title">Resources</h4>
                        <ul>
                            <li><Link to="/templates">All Templates</Link></li>
                            <li><Link to="/guides">How-to Guides</Link></li>
                            <li><Link to="/tools/checklist-builder">Checklist Builder</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4 className="footer-title">Support</h4>
                        <ul>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                            <li><Link to="/terms">Terms of Service</Link></li>
                            <li><Link to="/disclaimer">Disclaimer</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-info">
                        <p>&copy; {currentYear} Print & Plan Lab. All rights reserved.</p>
                        <p className="transparency-note">
                            This site contains free resources supported by ads.
                            Our templates are for personal use only.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
