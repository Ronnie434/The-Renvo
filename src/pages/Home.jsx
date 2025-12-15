import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {

  const [openFaq, setOpenFaq] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Intersection Observer for fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const fadeElements = document.querySelectorAll('.renvo-home .fade-in-section');
    fadeElements.forEach((el) => observer.observe(el));

    return () => {
      fadeElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const faqData = [
    {
      question: 'Is my payment data secure?',
      answer: 'Absolutely. We use industry-standard encryption. We never see or sell your financial data.'
    },
    {
      question: 'How does the Smart Intelligence work?',
      answer: 'Our Smart Intelligence analyzes your recurring payment patterns, compares them to market averages, and identifies unused services based on your input and usage frequency.'
    },
    {
      question: 'Can I cancel Premium anytime?',
      answer: "Yes. You can cancel instantly from your phone's subscription settings. No questions asked."
    }
  ];

  const painPoints = [
    {
      icon: (
        <svg className="pain-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Forgotten Subs',
      description: 'Draining money on services you stopped using months ago.',
      variant: 'danger'
    },
    {
      icon: (
        <svg className="pain-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      title: 'No Central View',
      description: 'Scattered across bank statements and app stores. No clarity.',
      variant: 'warning'
    },
    {
      icon: (
        <svg className="pain-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: 'Missed Increases',
      description: 'Prices rise silently. You only notice after the money is gone.',
      variant: 'neutral'
    },
    {
      icon: (
        <svg className="pain-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Budget Anxiety',
      description: 'Unpredictable charges hitting your account at the worst times.',
      variant: 'primary'
    }
  ];

  const features = [
    {
      icon: (
        <svg className="feature-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      title: 'Track Everything',
      description: 'All recurring payments in one dashboard. Auto-complete logos and instant cost breakdowns.'
    },
    {
      icon: (
        <svg className="feature-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Never Miss Renewal',
      description: 'Smart reminders before you pay. Visual timeline of upcoming charges.'
    },
    {
      icon: (
        <svg className="feature-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: 'Optimize & Save',
      description: 'Smart Intelligence finds forgotten payments and suggests cheaper annual plans.'
    }
  ];

  const aiFeatures = [
    {
      title: 'Smart Intelligence Savings Coach',
      description: 'Suggests annual vs monthly switches to maximize value.'
    },
    {
      title: 'Smart Intelligence Cancel Suggestions',
      description: "Detects unused services you haven't opened in weeks."
    },
    {
      title: 'Price Increase Alerts',
      description: 'Warns before prices rise so you can decide to keep or cancel.'
    },
    {
      title: 'Hidden Costs Detector',
      description: 'Identifies hidden fees and taxes on your bills.'
    },
    {
      title: 'Annual Savings Tracker',
      description: 'Visual proof of your financial progress over time.'
    },
    {
      title: 'Auto Cancel Links',
      description: 'Direct paths to cancellation pages for major services.'
    }
  ];

  const trustItems = [
    {
      icon: (
        <svg className="trust-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      ),
      title: 'Trusted App',
      subtitle: 'Highly Rated'
    },
    {
      icon: (
        <svg className="trust-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Real Savings',
      subtitle: 'Verified Results'
    },
    {
      icon: (
        <svg className="trust-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: 'Secure Data',
      subtitle: 'Bank-Level Encryption'
    },
    {
      icon: (
        <svg className="trust-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Global',
      subtitle: 'Multi-Currency Support'
    }
  ];

  const testimonials = [
    {
      quote: 'I found monthly recurring payments I forgot about completely. The Smart Intelligence suggestions are definitely worth looking into.',
      author: 'Sarah M., Seattle'
    },
    {
      quote: 'Finally an app that looks good and actually works. The design is so clean, it feels like a native app.',
      author: 'David K., Austin'
    },
    {
      quote: 'The price increase alerts saved me from a huge hike on my streaming service. I cancelled instantly.',
      author: 'Jessica R., New York'
    }
  ];

  return (
    <div className="renvo-home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            {/* Left Side: Text Content */}
            <div className="hero-text">
              <div className="hero-badge fade-in-section">
                <span className="badge-dot"></span>
                Join families saving money daily
              </div>
              
              <h1 className="hero-title fade-in-section">
                Track, manage, and optimize <span className="highlight">effortlessly</span>.
              </h1>
              
              <p className="hero-description fade-in-section">
                Stop wasting money on forgotten recurring payments. One dashboard. Complete clarity. AI-powered savings.
              </p>
              
              <div className="hero-buttons fade-in-section">
                <button className="store-btn">
                  <svg className="store-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                  <div className="store-text">
                    <div className="store-label">Download on the</div>
                    <div className="store-name">App Store</div>
                  </div>
                </button>
                <button className="store-btn store-btn--secondary">
                  <svg className="store-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.293-.708V2.522c0-.265.106-.52.293-.708zm10.851 10.183l2.814-2.814 3.507 2.02c.645.372.645 1.222 0 1.594l-3.507 2.02-2.814-2.82zM4.846.384l9.913 5.716-2.579 2.578L4.846.384zM4.846 23.616l7.334-8.294 2.579 2.578-9.913 5.716z" />
                  </svg>
                  <div className="store-text">
                    <div className="store-label">Get it on</div>
                    <div className="store-name">Google Play</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Right Side: Phone Mock */}
            <div className="hero-phone fade-in-section">
              <div className="phone-glow"></div>
              <div className="phone-container">
                <div className="phone-notch">
                  <div className="notch-inner"></div>
                </div>
                <div className="phone-button-left-1"></div>
                <div className="phone-button-left-2"></div>
                <div className="phone-button-right"></div>

                <div className="phone-screen">
                  <div className="mock-scroll">
                    <div className="screen-header">
                      <div>
                        <p className="screen-label">Overview</p>
                        <h3 className="screen-title">My Subs</h3>
                      </div>
                      <div className="avatar">
                        <svg className="avatar-icon" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </div>
                    </div>

                    <div className="total-card">
                      <p className="total-label">Total Monthly Burn</p>
                      <h2 className="total-amount">$142<span className="cents">.90</span></h2>
                      <div className="budget-badge">
                        <svg className="budget-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        Within budget
                      </div>
                    </div>

                    <div className="suggestion-card">
                      <div className="suggestion-icon">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="suggestion-title">Suggestion</h4>
                        <p className="suggestion-text">Switch <strong>Amazon Prime</strong> to annual to save $40!</p>
                      </div>
                    </div>

                    <div className="renewals-section">
                      <p className="renewals-label">Upcoming Renewals</p>
                      
                      <div className="renewal-item">
                        <div className="renewal-left">
                          <div className="sub-logo sub-logo--netflix">N</div>
                          <div>
                            <h4 className="sub-name">Netflix</h4>
                            <p className="sub-date sub-date--urgent">Renews Tomorrow</p>
                          </div>
                        </div>
                        <div className="sub-price">$15.49</div>
                      </div>

                      <div className="renewal-item">
                        <div className="renewal-left">
                          <div className="sub-logo sub-logo--spotify">S</div>
                          <div>
                            <h4 className="sub-name">Spotify</h4>
                            <p className="sub-date">In 5 days</p>
                          </div>
                        </div>
                        <div className="sub-price">$10.99</div>
                      </div>

                      <div className="renewal-item renewal-item--warning">
                        <div className="warning-indicator"></div>
                        <div className="renewal-left">
                          <div className="sub-logo sub-logo--adobe">A</div>
                          <div>
                            <h4 className="sub-name">Adobe CC</h4>
                            <p className="sub-date sub-date--warning">Price hike detected</p>
                          </div>
                        </div>
                        <div className="sub-price">$54.99</div>
                      </div>
                    </div>
                  </div>

                  <div className="phone-nav">
                    <div className="nav-item nav-item--active">
                      <svg className="nav-icon" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                      </svg>
                      <span className="nav-label">Home</span>
                    </div>
                    <div className="nav-item">
                      <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      <span className="nav-label">Stats</span>
                    </div>
                    <div className="nav-item">
                      <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="nav-label">Settings</span>
                    </div>
                  </div>
                  <div className="home-indicator"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="pain-section">
        <div className="section-container">
          <div className="section-header fade-in-section">
            <h2 className="section-title">You're losing money every month</h2>
            <p className="section-subtitle">And you probably don't even know it.</p>
          </div>
          <div className="pain-grid fade-in-section">
            {painPoints.map((point, index) => (
            <div key={index} className="pain-item">
              <div className={`pain-icon pain-icon--${point.variant}`}>
                {point.icon}
              </div>
              <div className="pain-item-content">
                <h3 className="pain-title">{point.title}</h3>
                <p className="pain-description">{point.description}</p>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="section-container">
          <div className="section-header fade-in-section">
            <h2 className="section-title">One app. Complete financial clarity.</h2>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card fade-in-section" style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Section */}
      <section className="ai-section">
        <div className="ai-bg"></div>
        <div className="section-container ai-content">
          <div className="section-header fade-in-section">
            <span className="ai-label">Premium Feature</span>
            <h2 className="ai-title">Meet your Smart Intelligence savings coach</h2>
            <p className="ai-subtitle">Premium intelligence that transforms The Renvo from a tracker into a financial advisor.</p>
          </div>

          <div className="ai-features-grid fade-in-section">
            {aiFeatures.map((feature, index) => (
              <div key={index} className="ai-feature-card">
                <h4 className="ai-feature-title">{feature.title}</h4>
                <p className="ai-feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="ai-cta fade-in-section">
            <Link to="/pricing" className="ai-cta-btn">
              Unlock Smart Intelligence →
            </Link>
          </div>
        </div>
      </section>

      {/* Stats / Trust Section */}
      <section className="trust-section">
        <div className="section-container">
          <div className="section-header fade-in-section">
            <h2 className="section-title">Join thousands taking control</h2>
          </div>
          <div className="trust-grid fade-in-section">
            {trustItems.map((item, index) => (
              <div key={index} className="trust-item">
                <div className="trust-icon">
                  {item.icon}
                </div>
                <div className="trust-title">{item.title}</div>
                <div className="trust-subtitle">{item.subtitle}</div>
              </div>
            ))}
          </div>
          
          <div className="testimonials-grid fade-in-section">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <div className="testimonial-author">— {testimonial.author}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing-section">
        <div className="section-container">
          <div className="section-header fade-in-section">
            <h2 className="section-title">Simple, fair pricing</h2>
          </div>
          <div className="pricing-grid">
            <div className="pricing-card fade-in-section">
              <h3 className="pricing-name">Starter</h3>
              <p className="pricing-subtitle">Free forever</p>
              <ul className="pricing-features">
                <li className="pricing-feature">
                  <svg className="check-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Track essential recurring payments
                </li>
                <li className="pricing-feature">
                  <svg className="check-icon" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Basic reminders
                </li>
              </ul>
              <Link to="#" className="pricing-btn pricing-btn--secondary">Download Now</Link>
            </div>
            <div className="pricing-card pricing-card--featured fade-in-section" style={{ transitionDelay: '100ms' }}>
              <div className="recommended-badge">RECOMMENDED</div>
              <h3 className="pricing-name">Pro</h3>
              <p className="pricing-subtitle pricing-subtitle--accent">Monthly or Yearly Plans</p>
              <ul className="pricing-features">
                <li className="pricing-feature pricing-feature--accent">
                  <svg className="check-icon check-icon--accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Unlimited recurring payments
                </li>
                <li className="pricing-feature pricing-feature--accent">
                  <svg className="check-icon check-icon--accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <strong>Full Smart Intelligence</strong>
                </li>
                <li className="pricing-feature pricing-feature--accent">
                  <svg className="check-icon check-icon--accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Custom Reports
                </li>
              </ul>
              <Link to="#" className="pricing-btn pricing-btn--primary">Start Free Trial</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="faq-container">
          <h2 className="section-title section-title--center fade-in-section">Frequently Asked Questions</h2>
          <div className="faq-list fade-in-section">
            {faqData.map((faq, index) => (
              <div key={index} className={`faq-item ${openFaq === index ? 'faq-item--open' : ''}`}>
                <button 
                  className="faq-toggle"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openFaq === index}
                >
                  <span>{faq.question}</span>
                  <svg 
                    className={`faq-icon ${openFaq === index ? 'faq-icon--rotated' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="faq-content">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-brand">
              <span className="footer-logo">The Renvo<span className="logo-dot">.</span></span>
              <p className="footer-description">Track, manage, and optimize your recurring expenses effortlessly.</p>
              <div className="footer-email">
                <a href="mailto:contact@therenvo.com">contact@therenvo.com</a>
              </div>
            </div>
            <div className="footer-links-section">
              <h4 className="footer-heading">Product</h4>
              <ul className="footer-links">
                <li><Link to="/features">Features</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><Link to="/">Download</Link></li>
              </ul>
            </div>
            <div className="footer-links-section">
              <h4 className="footer-heading">Company</h4>
              <ul className="footer-links">
                <li><a href="#">About</a></li>
                <li><Link to="/privacy">Privacy Policy</Link></li>
                <li><Link to="/terms">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            © 2025 The Renvo. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;