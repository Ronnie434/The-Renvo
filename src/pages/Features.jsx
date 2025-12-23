import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import './Features.css';

const Features = () => {
  const [activeSection, setActiveSection] = useState('');
  const [showBetaModal, setShowBetaModal] = useState(false);
  const [showComingSoonModal, setShowComingSoonModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute('id');
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleAppStoreClick = (e) => {
    e.preventDefault();
    setShowBetaModal(true);
  };

  const handleGooglePlayClick = (e) => {
    e.preventDefault();
    setShowComingSoonModal(true);
  };

  const closeBetaModal = () => {
    setShowBetaModal(false);
  };

  const closeComingSoonModal = () => {
    setShowComingSoonModal(false);
  };

  const handleBetaTestingClick = () => {
    window.open('https://testflight.apple.com/join/Sjk4tf75', '_blank');
    setShowBetaModal(false);
  };

  const navItems = [
    { id: 'subscription-control', label: 'Payment Control' },
    { id: 'financial-clarity', label: 'Financial Clarity' },
    { id: 'smart-detection', label: 'Smart Detection' },
    { id: 'ai-enhancements', label: 'Smart Intelligence Enhancements' },
    { id: 'automation-alerts', label: 'Automation & Alerts' },
    { id: 'platform-security', label: 'Platform & Security' },
  ];

  return (
    <div className="fp-page">
      {/* Beta Banner */}
      <div className="beta-banner">
        <div className="beta-banner-container">
          <div className="beta-banner-content">
            <div className="beta-banner-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="beta-banner-text">
              <span className="beta-banner-label">🚀 Beta Testing Now Available</span>
              <span className="beta-banner-message">The Renvo is currently in beta testing. Join now to be among the first to experience it!</span>
            </div>
          </div>
          <button onClick={handleAppStoreClick} className="beta-banner-button">
            Try Beta Now →
          </button>
        </div>
      </div>

      {/* Beta Testing Modal */}
      {showBetaModal && (
        <div className="modal-overlay" onClick={closeBetaModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeBetaModal}>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="modal-icon modal-icon--beta">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="modal-title">Beta Testing</h3>
            <p className="modal-description">
              The app is currently in beta testing. Please click below to get started with beta testing.
            </p>
            <button className="modal-button" onClick={handleBetaTestingClick}>
              Get Started with TestFlight
            </button>
          </div>
        </div>
      )}

      {/* Coming Soon Modal */}
      {showComingSoonModal && (
        <div className="modal-overlay" onClick={closeComingSoonModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeComingSoonModal}>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="modal-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="modal-title">Coming Soon</h3>
            <p className="modal-description">
              The Renvo for Android is coming soon! Stay tuned for updates.
            </p>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="fp-hero">
        <div className="fp-container">
          <div className="fp-hero__content">
            <div className="fp-badge fp-badge--primary">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              Trusted by 10,000+ users worldwide
            </div>
            <h1 className="fp-hero__title">
              Every feature designed for <span className="fp-text--gradient">clarity and control</span>
            </h1>
            <p className="fp-hero__subtitle">
              Complete recurring expense organization — from simple tracking to smart detection and financial insights. Finally, peace of mind over what you're paying for.
            </p>
          </div>
        </div>
      </section>

      {/* Sticky Navigation */}
      <nav className="fp-nav">
        <div className="fp-container">
          <div className="fp-nav__inner">
            <span className="fp-nav__label">Jump to:</span>
            <div className="fp-nav__links">
              {navItems.map((item) => (
                <a 
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`fp-nav__link ${activeSection === item.id ? 'fp-nav__link--active' : ''}`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Core Benefits */}
      <section className="fp-benefits">
        <div className="fp-container">
          <div className="fp-section-header fp-section-header--center">
            <h2 className="fp-section-header__title">Built around 7 core benefits</h2>
            <p className="fp-section-header__subtitle">Everything you need, nothing you don't.</p>
          </div>
          <div className="fp-benefits__grid">
            {[
              { label: 'Total Organization', color: 'sky', iconPath: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
              { label: 'Never Miss Renewals', color: 'green', iconPath: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
              { label: 'Instant Clarity', color: 'purple', iconPath: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' },
              { label: 'Auto Detection', color: 'orange', iconPath: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' },
              { label: 'Cancel Support', color: 'red', iconPath: 'M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636' },
              { label: 'AI Enhanced', color: 'indigo', iconPath: 'M13 10V3L4 14h7v7l9-11h-7z' },
              { label: 'Peace of Mind', color: 'teal', iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
            ].map((item, idx) => (
              <div key={idx} className="fp-benefit">
                <div className={`fp-benefit__icon fp-benefit__icon--${item.color}`}>
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.iconPath}/>
                  </svg>
                </div>
                <span className="fp-benefit__label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 1: Payment Control */}
      <section id="subscription-control" className="fp-feature-section">
        <div className="fp-container">
          <div className="fp-section-header">
            <div className="fp-section-header__accent fp-section-header__accent--sky"></div>
            <div className="fp-section-header__content">
              <span className="fp-section-header__overline fp-section-header__overline--sky">Core Feature</span>
              <h2 className="fp-section-header__title">Recurring Payment Control</h2>
              <p className="fp-section-header__subtitle">Total organization in one beautiful place</p>
            </div>
          </div>
          
          <div className="fp-cards-grid">
            <FeatureCard
              title="Unified Dashboard"
              description="See every recurring payment in one clean view. No more spreadsheets, no more guessing what you're paying for."
              quote="Finally, I can see all 23 recurring expenses in one place instead of scattered across apps."
              iconPath="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              isFree={true}
              color="sky"
            />
            
            <FeatureCard
              title="1,000+ Brand Logos"
              description="Auto-complete finds official brands instantly. Your payment list looks professional from day one."
              quote="Type 'Net' and Netflix appears with the perfect logo. So satisfying."
              iconPath="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
              isFree={true}
              color="sky"
            />

            <FeatureCard 
              title="Custom Categories"
              description="Organize with presets like Entertainment, Software, Utilities — or create your own categories that fit your life."
              quote="I created a 'Business Tools' category and finally understand my work expenses."
              iconPath="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
              isFree={true}
              color="sky"
            />

            <FeatureCard
              title="Multi-Currency Support"
              description="Track USD, EUR, GBP, and 50+ currencies with automatic conversion. Perfect for global recurring payments."
              quote="My UK and US payments finally make sense together."
              iconPath="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              isFree={true}
              color="sky"
            />

            <FeatureCard
              title="CSV Export"
              description="Export your complete recurring payment data for spreadsheets, tax software, or budgeting apps. Your data, your way."
              quote="Tax season was a breeze — I just exported everything to my accountant."
              iconPath="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              isFree={true}
              color="sky"
            />

            <FeatureCard
              title="Batch Operations"
              description="Edit, categorize, or archive multiple recurring payments at once. Manage 50 items in seconds, not hours."
              quote="Selected 12 old payments and archived them all in one click."
              iconPath="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
              isFree={false}
              color="sky"
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: Financial Clarity */}
      <section id="financial-clarity" className="fp-feature-section fp-feature-section--alt">
        <div className="fp-container">
          <div className="fp-section-header">
            <div className="fp-section-header__accent fp-section-header__accent--green"></div>
            <div className="fp-section-header__content">
              <span className="fp-section-header__overline fp-section-header__overline--green">Core Feature</span>
              <h2 className="fp-section-header__title">Financial Clarity</h2>
              <p className="fp-section-header__subtitle">Instant clarity over what you're paying for</p>
            </div>
          </div>
          
          <div className="fp-cards-grid">
            <FeatureCard
              title="Total Cost Dashboard"
              description="Real-time monthly and annual spending view. Know your exact recurring expense commitment at a glance — no calculator needed."
              quote="I had no idea I was spending $487/month until I saw the dashboard."
              iconPath="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              isFree={true}
              color="green"
            />

            <FeatureCard 
              title="Cost Breakdown by Category"
              description="See exactly where your money goes — Entertainment, Software, Utilities, and more. Visual pie charts make it crystal clear."
              quote="Entertainment was 60% of my spending. Time to cut back."
              iconPath="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
              isFree={true}
              color="green"
            />

            <FeatureCard 
              title="Renewal Timeline"
              description="Visual calendar of upcoming renewals. Prepare for charges, avoid surprises, and never get caught off guard again."
              quote="I can see 3 renewals coming next week — time to decide what stays."
              iconPath="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              isFree={true}
              color="green"
            />

            <FeatureCard
              title="Spending Trends"
              description="Historical charts showing if your recurring spending is increasing or decreasing over months. Track your progress."
              quote="Down 23% from 6 months ago. The Renvo paid for itself."
              iconPath="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              isFree={false}
              color="green"
            />

            <FeatureCard
              title="Monthly vs Yearly Comparison"
              description="Compare billing cycle costs side-by-side. Discover instant savings by switching from monthly to annual plans."
              quote="Switching 4 payments to annual saved me $156/year."
              iconPath="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
              isFree={true}
              color="green"
            />

            <FeatureCard
              title="Budget Tracking"
              description="Set a recurring expense budget and track actual spending against it. Get alerts when you're approaching your limit."
              quote="Set $200/month budget. Currently at $187. Peace of mind."
              iconPath="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              isFree={false}
              color="green"
            />
          </div>
        </div>
      </section>

      {/* SECTION 3: Smart Detection */}
      <section id="smart-detection" className="fp-feature-section">
        <div className="fp-container">
          <div className="fp-section-header">
            <div className="fp-section-header__accent fp-section-header__accent--orange"></div>
            <div className="fp-section-header__content">
              <span className="fp-section-header__overline fp-section-header__overline--orange">Core Feature</span>
              <h2 className="fp-section-header__title">Smart Detection</h2>
              <p className="fp-section-header__subtitle">Automatic recurring payment detection that works</p>
            </div>
          </div>
          
          <div className="fp-cards-grid fp-cards-grid--2col">
            <LargeFeatureCard
              title="Email Receipt Scanning"
              description="Connect your email and automatically detect payment receipts. We find the recurring payments you forgot about."
              quote="Found 7 recurring payments I completely forgot I was paying for!"
              iconPath="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              color="orange"
            />

            <LargeFeatureCard
              title="Bank Statement Import"
              description="Import bank statements and we'll identify recurring charges automatically. Catch every recurring payment, even the sneaky ones."
              quote="The $4.99 charge I'd been ignoring for 2 years? Finally found it."
              iconPath="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              color="orange"
            />

            <LargeFeatureCard 
              title="Duplicate Detection"
              description="Automatically flags when you have duplicate services — two cloud storage accounts, overlapping streaming services, etc."
              quote="Realized I was paying for both Dropbox and Google Drive. Saved $120/year."
              iconPath="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              color="orange"
            />

            <LargeFeatureCard 
              title="New Subscription Alerts"
              description="Get notified when a new recurring charge appears. Stay on top of free trials that convert to paid subscriptions."
              quote="Caught a free trial I forgot to cancel before the first charge."
              iconPath="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              color="orange"
            />
          </div>
        </div>
      </section>

      {/* SECTION 4: AI Enhancements */}
      <section id="ai-enhancements" className="fp-feature-section fp-feature-section--alt">
        <div className="fp-container">
          <div className="fp-section-header">
            <div className="fp-section-header__accent fp-section-header__accent--indigo"></div>
            <div className="fp-section-header__content">
              <span className="fp-section-header__overline fp-section-header__overline--indigo">Enhancement Feature</span>
              <h2 className="fp-section-header__title">Smart Intelligence Enhancements</h2>
              <p className="fp-section-header__subtitle">Intelligent features that support, not overshadow</p>
            </div>
          </div>
          
          <div className="fp-cards-grid fp-cards-grid--4col">
            <SmallFeatureCard 
              title="Smart Savings Coach"
              description="Analyzes patterns and suggests annual switches. Eliminates silent money leaks automatically."
              quote="Save $24/yr by switching to annual plan"
              iconPath="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              color="indigo"
            />
            <SmallFeatureCard
              title="Smart Cancel Suggestions"
              description="60+ day usage analysis identifies services you've stopped using. Eliminates guilt and waste."
              quote="Found 3 services you haven't used"
              iconPath="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
              color="indigo"
            />
            <SmallFeatureCard
              title="Smart Plan Optimization"
              description="Recommends cheaper plans based on your actual usage patterns. Right-size every recurring payment."
              quote="Switch to Basic, save $15/mo"
              iconPath="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              color="indigo"
            />
            <SmallFeatureCard 
              title="Price Increase Alerts"
              description="Pre-renewal warnings when vendors raise prices. Never be surprised by a higher bill."
              quote="Netflix increasing price next month"
              iconPath="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              color="indigo"
            />
            <SmallFeatureCard
              title="Per-Day Cost Calculator"
              description="Breaks down monthly fees into daily value perspective. See the true cost of every recurring payment."
              quote="Netflix costs $0.50/day — worth it?"
              iconPath="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              color="indigo"
            />
            <SmallFeatureCard 
              title="Hidden Costs Detector"
              description="Scans for taxes, service fees, and hidden charges that inflate your actual spending."
              quote="Found $8.47 in hidden fees"
              iconPath="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              color="indigo"
            />
            <SmallFeatureCard 
              title="Auto Cancellation Links"
              description="Direct deep-links to cancellation pages. No searching, no customer service runarounds."
              quote="Cancel Hulu in 3 clicks"
              iconPath="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              color="indigo"
            />
            <SmallFeatureCard 
              title="Annual Savings Tracker"
              description="Tracks cumulative money saved through optimization. See your ROI from The Renvo."
              quote="Saved $247 this year"
              iconPath="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z"
              color="indigo"
            />
          </div>
        </div>
      </section>

      {/* SECTION 5: Automation & Alerts */}
      <section id="automation-alerts" className="fp-feature-section">
        <div className="fp-container">
          <div className="fp-section-header">
            <div className="fp-section-header__accent fp-section-header__accent--rose"></div>
            <div className="fp-section-header__content">
              <span className="fp-section-header__overline fp-section-header__overline--rose">Core Feature</span>
              <h2 className="fp-section-header__title">Automation & Alerts</h2>
              <p className="fp-section-header__subtitle">Never miss a renewal again</p>
            </div>
          </div>
          
          {/* Featured Card */}
          <div className="fp-featured-card">
            <div className="fp-featured-card__header">
              <div className="fp-featured-card__icon fp-featured-card__icon--rose">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                </svg>
              </div>
              <span className="fp-badge fp-badge--free">Included in Free Plan</span>
            </div>
            <h3 className="fp-featured-card__title">Smart Renewal Reminders</h3>
            <p className="fp-featured-card__description">Automatic notifications 7, 3, and 1 day before every renewal. Plenty of time to review, cancel, or prepare.</p>
            
            <div className="fp-timeline">
              <div className="fp-timeline__item">
                <div className="fp-timeline__marker">7d</div>
                <p className="fp-timeline__text">First reminder — time to review</p>
              </div>
              <div className="fp-timeline__item">
                <div className="fp-timeline__marker">3d</div>
                <p className="fp-timeline__text">Second reminder — decide now</p>
              </div>
              <div className="fp-timeline__item">
                <div className="fp-timeline__marker">1d</div>
                <p className="fp-timeline__text">Final reminder — last chance</p>
              </div>
            </div>
            
            <div className="fp-featured-card__quote">
              <p>"The 7-day reminder saved me from a $199 annual renewal I forgot about."</p>
            </div>
          </div>

          <div className="fp-cards-grid fp-cards-grid--3col">
            <FeatureCard 
              title="Custom Reminder Schedules"
              description="Set personalized timing per subscription. Get 30-day warning for expensive items, 3-day for small ones."
              quote="My $500 annual software gets a 30-day heads up."
              iconPath="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              isFree={false}
              color="rose"
            />

            <FeatureCard 
              title="Push & Email Notifications"
              description="Get alerts where you prefer — mobile push, email, or both. Never miss a notification."
              quote="Push for urgent, email for weekly digest. Perfect combo."
              iconPath="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              isFree={true}
              color="rose"
            />

            <FeatureCard 
              title="Weekly Spending Reports"
              description="Automated weekly email digest with upcoming renewals, spending trends, and optimization tips."
              quote="Sunday morning coffee + weekly report = financial clarity."
              iconPath="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              isFree={false}
              color="rose"
            />
          </div>
        </div>
      </section>

      {/* SECTION 6: Platform & Security */}
      <section id="platform-security" className="fp-feature-section fp-feature-section--alt">
        <div className="fp-container">
          <div className="fp-section-header fp-section-header--with-badge">
            <div className="fp-section-header__row">
              <div className="fp-section-header__left">
                <div className="fp-section-header__accent fp-section-header__accent--teal"></div>
                <div className="fp-section-header__content">
                  <span className="fp-section-header__overline fp-section-header__overline--teal">Core Feature</span>
                  <h2 className="fp-section-header__title">Platform & Security</h2>
                  <p className="fp-section-header__subtitle">Peace of mind + simplicity across all devices</p>
                </div>
              </div>
              <span className="fp-badge fp-badge--enterprise">Enterprise Grade</span>
            </div>
          </div>
          
          <div className="fp-cards-grid">
            <FeatureCard 
              title="Cloud Sync"
              description="Seamless sync between iOS, Android, and Web. Access your subscription data anywhere, on any device."
              quote="Added a subscription on my phone, it appeared on my iPad instantly."
              iconPath="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
              isFree={false}
              color="teal"
            />

            <FeatureCard 
              title="Offline Mode"
              description="Full functionality without internet. Review your subscriptions on planes, in tunnels, or anywhere offline."
              quote="Reviewed all my subscriptions on a 6-hour flight. No WiFi needed."
              iconPath="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414"
              isFree={false}
              color="teal"
            />

            <FeatureCard 
              title="Automatic Backups"
              description="Daily automatic backups of all your data. Never lose your subscription history, even if you lose your device."
              quote="Got a new phone — restored 2 years of data in seconds."
              iconPath="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
              isFree={false}
              color="teal"
            />

            <FeatureCard 
              title="Bank-Level Encryption"
              description="256-bit AES encryption via Supabase. Your financial information is protected by the same standards banks use."
              quote="Security I can trust with my subscription data."
              iconPath="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              isFree={true}
              color="teal"
            />

            <FeatureCard 
              title="Privacy First"
              description="Zero data selling. Minimal collection. We only store what's needed to make The Renvo work. You own your data."
              quote="Finally, an app that respects my privacy."
              iconPath="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              isFree={true}
              color="teal"
            />

            <FeatureCard
              title="Data Portability"
              description="Export and import your data freely. Move between devices, share with accountants, or keep local backups."
              quote="Exported everything to share with my financial advisor."
              iconPath="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
              isFree={true}
              color="teal"
            />
          </div>

          {/* Platform Availability */}
          <div className="fp-platforms">
            <div className="fp-platforms__header">
              <h3 className="fp-platforms__title">Available on all your devices</h3>
              <p className="fp-platforms__subtitle">Start on one, continue on any other</p>
            </div>
            <div className="fp-platforms__grid">
              {[
                { platform: 'iOS', iconPath: 'M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z', fill: true },
                { platform: 'Android', iconPath: 'M17.523 2c.167 0 .334.011.499.033a6.07 6.07 0 0 1 2.023.596c.603.29 1.14.683 1.593 1.163.454.482.818 1.049 1.08 1.678a6.06 6.06 0 0 1 .282 3.71 6.06 6.06 0 0 1-1.363 2.595 6.073 6.073 0 0 1-2.305 1.62l-.014.005-4.798 1.897a.5.5 0 0 0-.296.377l-.006.054-.001.04.001.04.006.054a.5.5 0 0 0 .296.377l4.798 1.897.014.005a6.073 6.073 0 0 1 2.305 1.62 6.06 6.06 0 0 1 1.363 2.595 6.06 6.06 0 0 1-.282 3.71 6.055 6.055 0 0 1-1.08 1.678 6.06 6.06 0 0 1-1.593 1.163 6.07 6.07 0 0 1-2.023.596 6.07 6.07 0 0 1-2.105-.125 6.07 6.07 0 0 1-1.918-.778 6.06 6.06 0 0 1-1.555-1.31 6.07 6.07 0 0 1-1.06-1.729l-.004-.012-1.897-4.798a.5.5 0 0 0-.377-.296l-.054-.006-.04-.001-.04.001-.054.006a.5.5 0 0 0-.377.296l-1.897 4.798-.004.012a6.07 6.07 0 0 1-1.06 1.729 6.06 6.06 0 0 1-1.555 1.31 6.07 6.07 0 0 1-1.918.778 6.07 6.07 0 0 1-2.105.125 6.07 6.07 0 0 1-2.023-.596 6.06 6.06 0 0 1-1.593-1.163 6.055 6.055 0 0 1-1.08-1.678 6.06 6.06 0 0 1-.282-3.71 6.06 6.06 0 0 1 1.363-2.595 6.073 6.073 0 0 1 2.305-1.62l.014-.005 4.798-1.897a.5.5 0 0 0 .296-.377l.006-.054.001-.04-.001-.04-.006-.054a.5.5 0 0 0-.296-.377l-4.798-1.897-.014-.005a6.073 6.073 0 0 1-2.305-1.62 6.06 6.06 0 0 1-1.363-2.595 6.06 6.06 0 0 1 .282-3.71c.262-.629.626-1.196 1.08-1.678a6.06 6.06 0 0 1 1.593-1.163A6.07 6.07 0 0 1 6.477 2c.167-.022.334-.033.499-.033h10.547z', fill: true },
                { platform: 'Web App', iconPath: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9', fill: false },
                { platform: 'macOS', iconPath: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', fill: false },
                { platform: 'Windows', iconPath: 'M3 5.5A2.5 2.5 0 0 1 5.5 3h13A2.5 2.5 0 0 1 21 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-13zM5.5 5A.5.5 0 0 0 5 5.5V9h6V5H5.5zM11 11H5v7.5a.5.5 0 0 0 .5.5H11v-8zm2 0v8h5.5a.5.5 0 0 0 .5-.5V11h-6zm6-2V5.5a.5.5 0 0 0-.5-.5H13v4h6z', fill: true }
              ].map((item, idx) => (
                <div key={idx} className="fp-platform">
                  <div className="fp-platform__icon">
                    <svg fill={item.fill ? 'currentColor' : 'none'} stroke={item.fill ? 'none' : 'currentColor'} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={item.fill ? '0' : '2'} d={item.iconPath}/>
                    </svg>
                  </div>
                  <span className="fp-platform__label">{item.platform}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="fp-pricing">
        <div className="fp-container">
          <div className="fp-section-header fp-section-header--center">
            <h2 className="fp-section-header__title">What's included in each plan?</h2>
            <p className="fp-section-header__subtitle">Everything you need to take control of your recurring expenses</p>
          </div>
          
          <div className="fp-pricing__grid">
            {/* Free Plan */}
            <div className="fp-pricing-card">
              <div className="fp-pricing-card__header">
                <div className="fp-pricing-card__icon fp-pricing-card__icon--free">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="fp-pricing-card__name">Free</h3>
                  <p className="fp-pricing-card__tagline">Perfect for getting started</p>
                </div>
              </div>
              <div className="fp-pricing-card__price">$0<span>/forever</span></div>
              <ul className="fp-pricing-card__features">
                {[
                  'Unified Dashboard',
                  '1,000+ Brand Logos',
                  'Custom Categories',
                  'Multi-Currency Support',
                  'Total Cost Dashboard',
                  'Smart Renewal Reminders',
                  'Bank-Level Encryption',
                  'CSV Export'
                ].map((item, idx) => (
                  <li key={idx}>
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className="fp-btn fp-btn--secondary">
                Get Started Free
              </a>
            </div>

            {/* Premium Plan */}
            <div className="fp-pricing-card fp-pricing-card--premium">
              <div className="fp-pricing-card__popular">MOST POPULAR</div>
              <div className="fp-pricing-card__header">
                <div className="fp-pricing-card__icon fp-pricing-card__icon--premium">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="fp-pricing-card__name">Premium</h3>
                  <p className="fp-pricing-card__tagline">Full recurring payment control</p>
                </div>
              </div>
              <div className="fp-pricing-card__price">$4.99<span>/month</span></div>
              <p className="fp-pricing-card__save">or $39.99/year (save 33%)</p>
              <ul className="fp-pricing-card__features">
                {[
                  'Everything in Free',
                  'AI Savings Coach',
                  'AI Cancel Suggestions',
                  'Smart Detection & Scanning',
                  'Price Increase Alerts',
                  'Cloud Sync & Offline Mode',
                  'Automatic Backups',
                  'Priority Support'
                ].map((item, idx) => (
                  <li key={idx}>
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className="fp-btn fp-btn--primary">
                Start 7-Day Free Trial
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="fp-cta">
        <div className="fp-container">
          <div className="fp-cta__content">
            <div className="fp-badge fp-badge--success">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              No credit card required for free plan
            </div>
            <h2 className="fp-cta__title">
              Ready to take control of your recurring expenses?
            </h2>
            <p className="fp-cta__subtitle">
              Join thousands who've discovered what they're really paying for. Start with our free plan — upgrade whenever you're ready.
            </p>
            <div className="fp-cta__buttons">
              <button onClick={handleAppStoreClick} className="fp-btn fp-btn--primary fp-btn--lg">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Download for iOS
              </button>
              <button onClick={handleGooglePlayClick} className="fp-btn fp-btn--outline fp-btn--lg">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"/>
                </svg>
                Download for Android
              </button>
            </div>
            <div className="fp-cta__meta">
              <a href="/pricing" className="fp-cta__link">
                View detailed pricing
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </a>
              <span className="fp-cta__divider">|</span>
              <span className="fp-cta__rating">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                4.9/5 from 2,400+ reviews
              </span>
              <span className="fp-cta__divider">|</span>
              <span>10,000+ active users</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

// Feature Card Components
const FeatureCard = ({ title, description, quote, iconPath, isFree, color }) => (
  <div className={`fp-card fp-card--${color}`}>
    <div className="fp-card__header">
      <div className={`fp-card__icon fp-card__icon--${color}`}>
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={iconPath}/>
        </svg>
      </div>
      <span className={`fp-badge ${isFree ? 'fp-badge--free' : 'fp-badge--premium'}`}>
        {isFree ? 'Free' : 'Premium'}
      </span>
    </div>
    <h3 className="fp-card__title">{title}</h3>
    <p className="fp-card__description">{description}</p>
    <blockquote className="fp-card__quote">
      <p>"{quote}"</p>
    </blockquote>
  </div>
);

const LargeFeatureCard = ({ title, description, quote, iconPath, color }) => (
  <div className={`fp-card fp-card--lg fp-card--${color}`}>
    <div className="fp-card__header">
      <div className={`fp-card__icon fp-card__icon--${color}`}>
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={iconPath}/>
        </svg>
      </div>
      <span className="fp-badge fp-badge--premium">Premium</span>
    </div>
    <h3 className="fp-card__title">{title}</h3>
    <p className="fp-card__description">{description}</p>
    <blockquote className="fp-card__quote">
      <p>"{quote}"</p>
    </blockquote>
  </div>
);

const SmallFeatureCard = ({ title, description, quote, iconPath, color }) => (
  <div className={`fp-card fp-card--sm fp-card--${color}`}>
    <div className="fp-card__header">
      <div className={`fp-card__icon fp-card__icon--${color}`}>
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={iconPath}/>
        </svg>
      </div>
      <span className="fp-badge fp-badge--premium">Premium</span>
    </div>
    <h3 className="fp-card__title">{title}</h3>
    <p className="fp-card__description">{description}</p>
    <blockquote className="fp-card__quote">
      <p>"{quote}"</p>
    </blockquote>
  </div>
);

export default Features;