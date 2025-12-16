import './Navbar.css';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showDownloadModal, setShowDownloadModal] = useState(false);
    const scrollPositionRef = useRef(0);
    const closeButtonRef = useRef(null);

    // Enhanced scroll lock for mobile menu
    const lockScroll = useCallback(() => {
        // Save current scroll position
        scrollPositionRef.current = window.scrollY;
        
        // Add classes to lock scroll
        document.documentElement.classList.add('renvo-nav-open');
        document.body.classList.add('renvo-nav-open');
        
        // For iOS, we need to set the body position
        document.body.style.top = `-${scrollPositionRef.current}px`;
    }, []);

    const unlockScroll = useCallback(() => {
        // Remove classes
        document.documentElement.classList.remove('renvo-nav-open');
        document.body.classList.remove('renvo-nav-open');
        
        // Reset body position
        document.body.style.top = '';
        
        // Restore scroll position
        window.scrollTo(0, scrollPositionRef.current);
    }, []);

    const openMobileMenu = useCallback(() => {
        setMobileMenuOpen(true);
        lockScroll();
        // Focus close button after panel opens
        setTimeout(() => {
            closeButtonRef.current?.focus();
        }, 100);
    }, [lockScroll]);

    const closeMobileMenu = useCallback(() => {
        setMobileMenuOpen(false);
        unlockScroll();
    }, [unlockScroll]);

    const openDownloadModal = useCallback(() => {
        setShowDownloadModal(true);
        if (mobileMenuOpen) {
            closeMobileMenu();
        }
    }, [mobileMenuOpen, closeMobileMenu]);

    const closeDownloadModal = useCallback(() => {
        setShowDownloadModal(false);
    }, []);

    const handleAppStoreClick = useCallback(() => {
        window.open('https://testflight.apple.com/join/Sjk4tf75', '_blank');
        closeDownloadModal();
    }, [closeDownloadModal]);

    const handleGooglePlayClick = useCallback(() => {
        // You can show a "coming soon" message or handle differently
        alert('The Renvo for Android is coming soon!');
        closeDownloadModal();
    }, [closeDownloadModal]);

    const toggleMobileMenu = useCallback(() => {
        if (mobileMenuOpen) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    }, [mobileMenuOpen, openMobileMenu, closeMobileMenu]);

    // Handle scroll for navbar styling
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        // Check initial scroll position
        handleScroll();

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768 && mobileMenuOpen) {
                closeMobileMenu();
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [mobileMenuOpen, closeMobileMenu]);

    // Handle escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && mobileMenuOpen) {
                closeMobileMenu();
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [mobileMenuOpen, closeMobileMenu]);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            document.documentElement.classList.remove('renvo-nav-open');
            document.body.classList.remove('renvo-nav-open');
            document.body.style.top = '';
        };
    }, []);

    // Prevent touch move on overlay
    const handleOverlayTouchMove = useCallback((e) => {
        e.preventDefault();
    }, []);

    const navLinks = [
        { to: '/', label: 'Home' },
        { to: '/features', label: 'Features' },
        { to: '/pricing', label: 'Pricing' },
    ];

    return (
        <>
            {/* Download Modal */}
            {showDownloadModal && (
                <div className="renvo-nav-modal-overlay" onClick={closeDownloadModal}>
                    <div className="renvo-nav-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="renvo-nav-modal-close" onClick={closeDownloadModal}>
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <h3 className="renvo-nav-modal-title">Download The Renvo</h3>
                        <p className="renvo-nav-modal-description">
                            Choose your platform to get started
                        </p>
                        <div className="renvo-nav-modal-buttons">
                            <button className="renvo-nav-modal-btn" onClick={handleAppStoreClick}>
                                <svg className="renvo-nav-modal-icon" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                                </svg>
                                <div className="renvo-nav-modal-text">
                                    <div className="renvo-nav-modal-label">Download on the</div>
                                    <div className="renvo-nav-modal-name">App Store</div>
                                </div>
                            </button>
                            <button className="renvo-nav-modal-btn renvo-nav-modal-btn--secondary" onClick={handleGooglePlayClick}>
                                <svg className="renvo-nav-modal-icon" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.293-.708V2.522c0-.265.106-.52.293-.708zm10.851 10.183l2.814-2.814 3.507 2.02c.645.372.645 1.222 0 1.594l-3.507 2.02-2.814-2.82zM4.846.384l9.913 5.716-2.579 2.578L4.846.384zM4.846 23.616l7.334-8.294 2.579 2.578-9.913 5.716z" />
                                </svg>
                                <div className="renvo-nav-modal-text">
                                    <div className="renvo-nav-modal-label">Get it on</div>
                                    <div className="renvo-nav-modal-name">Google Play</div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Spacer to prevent content from hiding behind fixed navbar */}
            <div className="renvo-nav-spacer" />

            {/* Main Navbar */}
            <nav 
                className={`renvo-nav ${scrolled ? 'renvo-nav--scrolled' : ''}`} 
                aria-label="Main navigation"
            >
                <div className="renvo-nav__container">
                    {/* Logo */}
                    <NavLink
                        to="/"
                        className="renvo-nav__logo"
                        onClick={closeMobileMenu}
                        aria-label="The Renvo - Home"
                    >
                        <img src="/app-logo.png" alt="The Renvo" className="renvo-nav__logo-img" />
                        <span className="renvo-nav__logo-text">The Renvo</span>
                        {/* <span className="renvo-nav__logo-dot">.</span> */}
                    </NavLink>

                    {/* Desktop Navigation */}
                    <div className="renvo-nav__desktop">
                        <ul className="renvo-nav__links">
                            {navLinks.map(({ to, label }) => (
                                <li key={to} className="renvo-nav__item">
                                    <NavLink
                                        to={to}
                                        className={({ isActive }) =>
                                            `renvo-nav__link ${isActive ? 'renvo-nav__link--active' : ''}`
                                        }
                                    >
                                        {label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                        <ThemeToggle />
                        <button onClick={openDownloadModal} className="renvo-nav__cta" type="button">
                            <span>Download</span>
                            <svg
                                className="renvo-nav__cta-icon"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Menu Toggle Button */}
                    <button 
                        className={`renvo-nav__toggle ${mobileMenuOpen ? 'renvo-nav__toggle--active' : ''}`}
                        aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={mobileMenuOpen}
                        aria-controls="renvo-mobile-menu"
                        onClick={toggleMobileMenu}
                        type="button"
                    >
                        <span className="renvo-nav__toggle-line" aria-hidden="true" />
                        <span className="renvo-nav__toggle-line" aria-hidden="true" />
                        <span className="renvo-nav__toggle-line" aria-hidden="true" />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div 
                className={`renvo-nav__overlay ${mobileMenuOpen ? 'renvo-nav__overlay--visible' : ''}`}
                onClick={closeMobileMenu}
                onTouchMove={handleOverlayTouchMove}
                aria-hidden="true"
                role="presentation"
            />

            {/* Mobile Menu Panel */}
            <nav 
                id="renvo-mobile-menu"
                className={`renvo-nav__mobile ${mobileMenuOpen ? 'renvo-nav__mobile--open' : ''}`}
                aria-label="Mobile navigation"
                aria-hidden={!mobileMenuOpen}
                role="dialog"
                aria-modal="true"
            >
                {/* Mobile Menu Header */}
                <div className="renvo-nav__mobile-header">
                    <span className="renvo-nav__mobile-title">Menu</span>
                    <button 
                        ref={closeButtonRef}
                        className="renvo-nav__mobile-close"
                        onClick={closeMobileMenu}
                        aria-label="Close menu"
                        type="button"
                        tabIndex={mobileMenuOpen ? 0 : -1}
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu Content */}
                <div className="renvo-nav__mobile-content">
                    <div className="renvo-nav__mobile-theme">
                        <ThemeToggle />
                    </div>
                    <ul className="renvo-nav__mobile-links">
                        {navLinks.map(({ to, label }, index) => (
                            <li 
                                key={to} 
                                className="renvo-nav__mobile-item"
                            >
                                <NavLink 
                                    to={to} 
                                    className={({ isActive }) => 
                                        `renvo-nav__mobile-link ${isActive ? 'renvo-nav__mobile-link--active' : ''}`
                                    }
                                    onClick={closeMobileMenu}
                                    tabIndex={mobileMenuOpen ? 0 : -1}
                                    style={{ 
                                        animationDelay: mobileMenuOpen ? `${index * 50 + 100}ms` : '0ms' 
                                    }}
                                >
                                    {label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile CTA */}
                    <div className="renvo-nav__mobile-cta-wrapper">
                        <button
                            onClick={openDownloadModal}
                            className="renvo-nav__mobile-cta"
                            tabIndex={mobileMenuOpen ? 0 : -1}
                            type="button"
                        >
                            <span>Download Now</span>
                            <svg
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;