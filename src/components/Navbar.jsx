import './Navbar.css';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
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
                        <span className="renvo-nav__logo-text">The Renvo</span>
                        <span className="renvo-nav__logo-dot">.</span>
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
                        <NavLink to="/pricing" className="renvo-nav__cta">
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
                        </NavLink>
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
                        <NavLink 
                            to="/pricing" 
                            className="renvo-nav__mobile-cta"
                            onClick={closeMobileMenu}
                            tabIndex={mobileMenuOpen ? 0 : -1}
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
                        </NavLink>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;