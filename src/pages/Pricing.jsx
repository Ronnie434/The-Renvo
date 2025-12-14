import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Pricing.css';

const Pricing = () => {
    const [isYearly, setIsYearly] = useState(true);
    const [openFaq, setOpenFaq] = useState(null);

    const toggleBilling = () => {
        setIsYearly(!isYearly);
    };

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    // Reusable Check Icon Component
    const CheckIcon = ({ className = "text-green-600 dark:text-green-400" }) => (
        <svg className={`h-4 w-4 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
    );

    // Reusable Feature Item Component
    const FeatureItem = ({ icon, title, description, badge, badgeColor = "green" }) => {
        const badgeStyles = {
            green: "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300",
            blue: "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300",
            yellow: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300"
        };

        return (
            <div className="pricing-feature-card group">
                <div className="flex items-start justify-between mb-4">
                    <div className="pricing-feature-icon">
                        {icon}
                    </div>
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${badgeStyles[badgeColor]}`}>
                        {badge}
                    </span>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">{title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
            </div>
        );
    };

    return (
        <div className="pricing-page-container">
            {/* ============================================ */}
            {/* HEADER SECTION */}
            {/* ============================================ */}
            <header className="pricing-header">
                <div className="pricing-header-inner">
                    <div className="pricing-header-badge">
                        Simple, Transparent Pricing
                    </div>
                    
                    <h1 className="pricing-header-title">
                        Stop Silent Money Leaks.
                        <span className="pricing-header-title-accent">Protect What You Earn.</span>
                    </h1>
                    
                    <p className="pricing-header-subtitle">
                        The average person wastes <strong>$240/year</strong> on forgotten subscriptions.
                        The Renvo finds them before they drain your wallet.
                    </p>

                    {/* Stats Grid */}
                    <div className="pricing-stats-grid">
                        <div className="pricing-stat-card">
                            <div className="pricing-stat-value">$240+</div>
                            <p className="pricing-stat-label">Average yearly savings</p>
                        </div>
                        <div className="pricing-stat-card">
                            <div className="pricing-stat-value">2 min</div>
                            <p className="pricing-stat-label">Setup time</p>
                        </div>
                        <div className="pricing-stat-card">
                            <div className="pricing-stat-value">100%</div>
                            <p className="pricing-stat-label">Money-back guarantee</p>
                        </div>
                    </div>

                    {/* Billing Toggle */}
                    <div className="pricing-toggle-container">
                        <div className="pricing-toggle-wrapper">
                            <span className={`pricing-toggle-label ${!isYearly ? 'active' : ''}`}>
                                Monthly
                            </span>
                            <button
                                onClick={toggleBilling}
                                className={`pricing-toggle-switch ${isYearly ? 'active' : ''}`}
                                role="switch"
                                aria-checked={isYearly}
                                aria-label="Toggle between monthly and yearly billing"
                            >
                                <span className={`pricing-toggle-knob ${isYearly ? 'translate-x-6' : 'translate-x-0'}`} />
                            </button>
                            <span className={`pricing-toggle-label ${isYearly ? 'active' : ''}`}>
                                Yearly
                                <span className="pricing-toggle-badge">Save 35%</span>
                            </span>
                        </div>
                        <p className="pricing-toggle-hint">Most customers choose yearly — it's the smarter value</p>
                    </div>
                </div>
            </header>

            <main className="pricing-main">
                {/* ============================================ */}
                {/* PRICING CARDS SECTION */}
                {/* ============================================ */}
                <section className="pricing-plans-section" aria-labelledby="pricing-heading">
                    <h2 id="pricing-heading" className="sr-only">Pricing Plans</h2>
                    <div className="pricing-plans-container">
                        <div className="pricing-plans-grid">
                            
                            {/* FREE PLAN CARD */}
                            <div className="pricing-card pricing-card-free">
                                <div className="pricing-card-header">
                                    <div className="pricing-card-header-top">
                                        <h3 className="pricing-card-title">Free Forever</h3>
                                        <span className="pricing-card-badge pricing-card-badge-gray">STARTER</span>
                                    </div>
                                    <div className="pricing-card-price">
                                        <span className="pricing-card-price-value">$0</span>
                                        <span className="pricing-card-price-period">/forever</span>
                                    </div>
                                    <p className="pricing-card-description">
                                        Perfect for getting started. Track up to 5 subscriptions with essential tools.
                                    </p>
                                </div>

                                <div className="pricing-card-features">
                                    <p className="pricing-card-features-label">What's Included:</p>
                                    <ul className="pricing-card-features-list">
                                        {[
                                            { title: "Up to 5 subscriptions", desc: "Track your most important recurring payments" },
                                            { title: "Cloud sync across all devices", desc: "Access your data on phone, tablet, and web" },
                                            { title: "Renewal reminders", desc: "Never miss a payment date again" },
                                            { title: "Basic analytics dashboard", desc: "See your spending at a glance" },
                                            { title: "Category organization", desc: "Group by Entertainment, Productivity, etc." },
                                            { title: "CSV export", desc: "Download your data anytime" },
                                            { title: "Dark mode support", desc: "Easy on your eyes, day or night" }
                                        ].map((feature, idx) => (
                                            <li key={idx} className="pricing-card-feature-item">
                                                <div className="pricing-card-feature-icon">
                                                    <CheckIcon />
                                                </div>
                                                <div className="pricing-card-feature-content">
                                                    <span className="pricing-card-feature-title">{feature.title}</span>
                                                    <p className="pricing-card-feature-desc">{feature.desc}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="pricing-card-footer">
                                    <Link to="#" className="pricing-card-button pricing-card-button-secondary">
                                        Start Free
                                    </Link>
                                    <p className="pricing-card-footer-note">No credit card required • No commitment</p>
                                </div>
                            </div>

                            {/* PREMIUM PLAN CARD */}
                            <div className="pricing-card pricing-card-premium">
                                <div className="pricing-card-popular-badge">
                                    ⭐ Most Popular
                                </div>
                                
                                <div className="pricing-card-header">
                                    <div className="pricing-card-header-top">
                                        <h3 className="pricing-card-title">Premium</h3>
                                        <span className="pricing-card-badge pricing-card-badge-brand">BEST VALUE</span>
                                    </div>
                                    <div className="pricing-card-price">
                                        <span className="pricing-card-price-value">{isYearly ? '$39' : '$4.99'}</span>
                                        <span className="pricing-card-price-period">{isYearly ? '/year' : '/month'}</span>
                                    </div>
                                    {isYearly && (
                                        <p className="pricing-card-savings">
                                            <span className="line-through text-gray-400">$59.88/year</span>
                                            <span className="pricing-card-savings-amount">Save $20.88</span>
                                        </p>
                                    )}
                                    <p className="pricing-card-description">
                                        Everything in Free, plus powerful intelligence that finds hidden costs and stops wasted spending.
                                    </p>
                                </div>

                                <div className="pricing-card-features">
                                    <p className="pricing-card-features-label">Everything in Free, plus:</p>
                                    <ul className="pricing-card-features-list">
                                        {[
                                            { title: "Unlimited subscriptions", desc: "Track every single recurring payment" },
                                            { title: "AI Savings Coach", desc: "Personal advice to save on every subscription" },
                                            { title: "Smart Detection Suite", desc: "Hidden costs, per-day calculator, burn rate" },
                                            { title: "Auto cancellation links", desc: "One-click cancel guidance for any service" },
                                            { title: "Offline mode + Cloud Sync", desc: "Access your data anywhere, anytime" },
                                            { title: "Secure Supabase backend", desc: "Bank-level encryption for your data" }
                                        ].map((feature, idx) => (
                                            <li key={idx} className="pricing-card-feature-item">
                                                <div className="pricing-card-feature-icon pricing-card-feature-icon-brand">
                                                    <CheckIcon className="text-brand-600 dark:text-brand-400" />
                                                </div>
                                                <div className="pricing-card-feature-content">
                                                    <span className="pricing-card-feature-title">{feature.title}</span>
                                                    <p className="pricing-card-feature-desc">{feature.desc}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="pricing-card-value-prop">
                                    <p className="pricing-card-value-prop-text">
                                        <span className="pricing-card-value-prop-highlight">💡 One forgotten $15/month subscription = $180/year.</span>
                                        <span className="pricing-card-value-prop-sub">Premium finds it for just $39/year. The math is obvious.</span>
                                    </p>
                                </div>

                                <div className="pricing-card-footer">
                                    <Link to="#" className="pricing-card-button pricing-card-button-primary">
                                        Upgrade to Premium
                                    </Link>
                                    <p className="pricing-card-footer-note">7-day money-back guarantee • Cancel anytime</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section Divider */}
                <div className="pricing-section-divider" />

                {/* ============================================ */}
                {/* FEATURE BREAKDOWN SECTION */}
                {/* ============================================ */}
                <section className="pricing-features-section" aria-labelledby="feature-breakdown-heading">
                    <div className="pricing-features-container">
                        <div className="pricing-section-header">
                            <span className="pricing-section-badge">Complete Feature Breakdown</span>
                            <h2 id="feature-breakdown-heading" className="pricing-section-title">
                                Every Feature, Explained
                            </h2>
                            <p className="pricing-section-subtitle">
                                See exactly what's included in each plan. No hidden surprises, no confusing fine print.
                            </p>
                        </div>

                        {/* CATEGORY 1: CORE FEATURES */}
                        <div className="pricing-feature-category">
                            <div className="pricing-feature-category-header">
                                <div className="pricing-feature-category-icon pricing-feature-category-icon-gray">
                                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                    </svg>
                                </div>
                                <div className="pricing-feature-category-info">
                                    <h3 className="pricing-feature-category-title">Core Features</h3>
                                    <p className="pricing-feature-category-desc">Essential subscription management tools</p>
                                </div>
                            </div>

                            <div className="pricing-feature-grid">
                                <FeatureItem
                                    icon={<svg className="h-5 w-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>}
                                    title="Up to 5 Subscriptions"
                                    description="Track your most important recurring payments. Perfect for getting started and seeing immediate value."
                                    badge="Free"
                                    badgeColor="green"
                                />
                                <FeatureItem
                                    icon={<svg className="h-5 w-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>}
                                    title="Cloud Sync Across Devices"
                                    description="Your subscription data follows you everywhere. Update on your phone, see changes on your tablet instantly."
                                    badge="Free"
                                    badgeColor="green"
                                />
                                <FeatureItem
                                    icon={<svg className="h-5 w-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>}
                                    title="Renewal Reminders"
                                    description="Get notified before any subscription renews. Cancel before you're charged for something you don't use."
                                    badge="Free"
                                    badgeColor="green"
                                />
                                <FeatureItem
                                    icon={<svg className="h-5 w-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>}
                                    title="Basic Analytics Dashboard"
                                    description="See your total monthly and yearly spending at a glance. Understand where your money goes each month."
                                    badge="Free"
                                    badgeColor="green"
                                />
                                <FeatureItem
                                    icon={<svg className="h-5 w-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>}
                                    title="Category Organization"
                                    description="Group your subscriptions by type — Entertainment, Productivity, Health, Utilities — for better clarity."
                                    badge="Free"
                                    badgeColor="green"
                                />
                                <FeatureItem
                                    icon={<svg className="h-5 w-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>}
                                    title="CSV Export"
                                    description="Download all your subscription data anytime. Use it in spreadsheets, share with your accountant, or keep for records."
                                    badge="Free"
                                    badgeColor="green"
                                />
                                <FeatureItem
                                    icon={<svg className="h-5 w-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>}
                                    title="Dark Mode Support"
                                    description="Easy on your eyes, day or night. Switch between light and dark themes based on your preference or time of day."
                                    badge="Free"
                                    badgeColor="green"
                                />
                            </div>
                        </div>

                        {/* CATEGORY 2: SMART DETECTION */}
                        <div className="pricing-feature-category">
                            <div className="pricing-feature-category-header">
                                <div className="pricing-feature-category-icon pricing-feature-category-icon-purple">
                                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <div className="pricing-feature-category-info">
                                    <h3 className="pricing-feature-category-title">Smart Detection</h3>
                                    <p className="pricing-feature-category-desc">Intelligent insights that find money you're wasting</p>
                                </div>
                                <span className="pricing-feature-category-badge">PREMIUM</span>
                            </div>

                            <div className="pricing-feature-grid">
                                <FeatureItem
                                    icon={<svg className="h-5 w-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                                    title="Per-Day Cost Calculator"
                                    description="See what each subscription truly costs per day. Suddenly that 'cheap' $15/month service reveals itself as $0.50 daily drain."
                                    badge="Premium"
                                    badgeColor="blue"
                                />
                                <FeatureItem
                                    icon={<svg className="h-5 w-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>}
                                    title="Hidden Costs Detector"
                                    description="Surfaces fees, taxes, trial conversions, and add-ons you may have missed. Stop paying for things you didn't know about."
                                    badge="Premium"
                                    badgeColor="blue"
                                />
                                <FeatureItem
                                    icon={<svg className="h-5 w-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>}
                                    title="Price Comparison Table"
                                    description="Compare competitor prices instantly. See if Hulu, Netflix, or Disney+ gives you better value for similar content."
                                    badge="Premium"
                                    badgeColor="blue"
                                />
                                <FeatureItem
                                    icon={<svg className="h-5 w-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>}
                                    title="Annual Savings Tracker"
                                    description="See cumulative savings from cancellations and plan changes. Proof that your attention to subscriptions pays off."
                                    badge="Premium"
                                    badgeColor="blue"
                                />
                                <FeatureItem
                                    icon={<svg className="h-5 w-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /></svg>}
                                    title="Category Burn Rate"
                                    description="See which categories drain your wallet fastest. Entertainment eating $89/month? Time to reconsider some services."
                                    badge="Premium"
                                    badgeColor="blue"
                                />
                            </div>
                        </div>

                        {/* CATEGORY 3: AI ENHANCEMENTS */}
                        <div className="pricing-feature-category">
                            <div className="pricing-feature-category-header">
                                <div className="pricing-feature-category-icon pricing-feature-category-icon-brand">
                                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div className="pricing-feature-category-info">
                                    <h3 className="pricing-feature-category-title">AI Enhancements</h3>
                                    <p className="pricing-feature-category-desc">Intelligent recommendations powered by machine learning</p>
                                </div>
                                <span className="pricing-feature-category-badge">PREMIUM</span>
                            </div>

                            <div className="pricing-feature-grid">
                                <FeatureItem
                                    icon={<svg className="h-5 w-5 text-brand-600 dark:text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
                                    title="AI Savings Coach"
                                    description="Personal advice that recommends cheaper plans, bundles, and optimal timing for upgrades or cancellations."
                                    badge="Premium"
                                    badgeColor="blue"
                                />
                                <FeatureItem
                                    icon={<svg className="h-5 w-5 text-brand-600 dark:text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>}
                                    title="AI Cancel Suggestions"
                                    description="Detects unused services based on your patterns and suggests cancellations with direct action links."
                                    badge="Premium"
                                    badgeColor="blue"
                                />
                                <FeatureItem
                                    icon={<svg className="h-5 w-5 text-brand-600 dark:text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>}
                                    title="AI Plan Optimization"
                                    description="Finds cheaper pricing tiers or bundles without losing features. Suggests optimal plan combinations."
                                    badge="Premium"
                                    badgeColor="blue"
                                />
                                <FeatureItem
                                    icon={<svg className="h-5 w-5 text-brand-600 dark:text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>}
                                    title="AI Price Increase Alerts"
                                    description="Get notified when providers raise prices on your tracked subscriptions. Decide to keep or cancel before the change hits."
                                    badge="Coming Soon"
                                    badgeColor="yellow"
                                />
                            </div>
                        </div>

                        {/* CATEGORY 4: AUTOMATION & ALERTS */}
                        <div className="pricing-feature-category">
                            <div className="pricing-feature-category-header">
                                <div className="pricing-feature-category-icon pricing-feature-category-icon-orange">
                                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                    </svg>
                                </div>
                                <div className="pricing-feature-category-info">
                                    <h3 className="pricing-feature-category-title">Automation & Alerts</h3>
                                    <p className="pricing-feature-category-desc">Take action without the hassle</p>
                                </div>
                                <span className="pricing-feature-category-badge">PREMIUM</span>
                            </div>

                            <div className="pricing-feature-grid">
                                <FeatureItem
                                    icon={<svg className="h-5 w-5 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>}
                                    title="Auto Cancellation Links"
                                    description="Direct links to each service's cancellation page. No more hunting through settings or dealing with dark patterns."
                                    badge="Premium"
                                    badgeColor="blue"
                                />
                                <FeatureItem
                                    icon={<svg className="h-5 w-5 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>}
                                    title="Cancellation Guidance"
                                    description="Step-by-step instructions for canceling each service. We guide you through even the trickiest processes."
                                    badge="Premium"
                                    badgeColor="blue"
                                />
                            </div>
                        </div>

                        {/* CATEGORY 5: PLATFORM & SECURITY */}
                        <div className="pricing-feature-category">
                            <div className="pricing-feature-category-header">
                                <div className="pricing-feature-category-icon pricing-feature-category-icon-green">
                                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <div className="pricing-feature-category-info">
                                    <h3 className="pricing-feature-category-title">Platform & Security</h3>
                                    <p className="pricing-feature-category-desc">Enterprise-grade protection for your data</p>
                                </div>
                                <span className="pricing-feature-category-badge">PREMIUM</span>
                            </div>

                            <div className="pricing-feature-grid">
                                <FeatureItem
                                    icon={<svg className="h-5 w-5 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>}
                                    title="Secure Supabase Backend"
                                    description="Your data is encrypted and stored using Supabase best practices. Bank-level security for your financial information."
                                    badge="Premium"
                                    badgeColor="blue"
                                />
                                <FeatureItem
                                    icon={<svg className="h-5 w-5 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414" /></svg>}
                                    title="Offline Mode"
                                    description="Access your subscriptions even without internet. Changes sync automatically when you're back online."
                                    badge="Premium"
                                    badgeColor="blue"
                                />
                                <FeatureItem
                                    icon={<svg className="h-5 w-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>}
                                    title="iOS & Android Support"
                                    description="Native-ready experience on both platforms. Deep-linking, push notifications, and smooth performance everywhere."
                                    badge="Premium"
                                    badgeColor="blue"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section Divider */}
                <div className="pricing-section-divider" />

                {/* ============================================ */}
                {/* COMPARISON TABLE SECTION */}
                {/* ============================================ */}
                <section className="pricing-comparison-section" aria-labelledby="comparison-table-heading">
                    <div className="pricing-comparison-container">
                        <div className="pricing-section-header">
                            <h2 id="comparison-table-heading" className="pricing-section-title">
                                Quick Comparison
                            </h2>
                            <p className="pricing-section-subtitle">
                                See all features side-by-side at a glance
                            </p>
                        </div>

                        <div className="pricing-comparison-table-wrapper">
                            <table className="pricing-comparison-table">
                                <thead>
                                    <tr>
                                        <th className="pricing-table-header-feature">Feature</th>
                                        <th className="pricing-table-header-plan">Free</th>
                                        <th className="pricing-table-header-plan pricing-table-header-premium">Premium</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Core Features */}
                                    <tr className="pricing-table-category-row">
                                        <td colSpan="3">Core Features</td>
                                    </tr>
                                    <tr>
                                        <td>Subscriptions limit</td>
                                        <td className="pricing-table-value">Up to 5</td>
                                        <td className="pricing-table-value pricing-table-premium-cell">
                                            <span className="font-medium">Unlimited</span>
                                        </td>
                                    </tr>
                                    {[
                                        "Cloud sync across devices",
                                        "Renewal reminders",
                                        "Basic analytics dashboard",
                                        "Category organization",
                                        "CSV export",
                                        "Dark mode support"
                                    ].map((feature, idx) => (
                                        <tr key={idx}>
                                            <td>{feature}</td>
                                            <td className="pricing-table-value">
                                                <svg className="pricing-table-check" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                                </svg>
                                            </td>
                                            <td className="pricing-table-value pricing-table-premium-cell">
                                                <svg className="pricing-table-check" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                                </svg>
                                            </td>
                                        </tr>
                                    ))}

                                    {/* Smart Detection */}
                                    <tr className="pricing-table-category-row">
                                        <td colSpan="3">Smart Detection</td>
                                    </tr>
                                    {[
                                        "Per-Day Cost Calculator",
                                        "Hidden Costs Detector",
                                        "Price Comparison Table",
                                        "Annual Savings Tracker",
                                        "Category Burn Rate"
                                    ].map((feature, idx) => (
                                        <tr key={idx}>
                                            <td>{feature}</td>
                                            <td className="pricing-table-value">
                                                <svg className="pricing-table-cross" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                                                </svg>
                                            </td>
                                            <td className="pricing-table-value pricing-table-premium-cell">
                                                <svg className="pricing-table-check" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                                </svg>
                                            </td>
                                        </tr>
                                    ))}

                                    {/* AI Enhancements */}
                                    <tr className="pricing-table-category-row">
                                        <td colSpan="3">AI Enhancements</td>
                                    </tr>
                                    {[
                                        "AI Savings Coach",
                                        "AI Cancel Suggestions",
                                        "AI Plan Optimization"
                                    ].map((feature, idx) => (
                                        <tr key={idx}>
                                            <td>{feature}</td>
                                            <td className="pricing-table-value">
                                                <svg className="pricing-table-cross" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                                                </svg>
                                            </td>
                                            <td className="pricing-table-value pricing-table-premium-cell">
                                                <svg className="pricing-table-check" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                                </svg>
                                            </td>
                                        </tr>
                                    ))}
                                    <tr>
                                        <td>AI Price Increase Alerts <span className="text-xs text-gray-400">(coming soon)</span></td>
                                        <td className="pricing-table-value">
                                            <svg className="pricing-table-cross" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                                            </svg>
                                        </td>
                                        <td className="pricing-table-value pricing-table-premium-cell">
                                            <svg className="pricing-table-check" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                            </svg>
                                        </td>
                                    </tr>

                                    {/* Automation & Alerts */}
                                    <tr className="pricing-table-category-row">
                                        <td colSpan="3">Automation & Alerts</td>
                                    </tr>
                                    {[
                                        "Auto cancellation links",
                                        "Cancellation guidance"
                                    ].map((feature, idx) => (
                                        <tr key={idx}>
                                            <td>{feature}</td>
                                            <td className="pricing-table-value">
                                                <svg className="pricing-table-cross" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                                                </svg>
                                            </td>
                                            <td className="pricing-table-value pricing-table-premium-cell">
                                                <svg className="pricing-table-check" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                                </svg>
                                            </td>
                                        </tr>
                                    ))}

                                    {/* Platform & Security */}
                                    <tr className="pricing-table-category-row">
                                        <td colSpan="3">Platform & Security</td>
                                    </tr>
                                    {[
                                        "Secure Supabase backend",
                                        "Offline mode",
                                        "iOS & Android support"
                                    ].map((feature, idx) => (
                                        <tr key={idx}>
                                            <td>{feature}</td>
                                            <td className="pricing-table-value">
                                                <svg className="pricing-table-cross" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                                                </svg>
                                            </td>
                                            <td className="pricing-table-value pricing-table-premium-cell">
                                                <svg className="pricing-table-check" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                                </svg>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Section Divider */}
                <div className="pricing-section-divider" />

                {/* ============================================ */}
                {/* TRUST SECTION */}
                {/* ============================================ */}
                <section className="pricing-trust-section" aria-labelledby="trust-heading">
                    <div className="pricing-trust-container">
                        <h2 id="trust-heading" className="pricing-trust-title">
                            Bank-Level Security. Your Data Stays Yours.
                        </h2>
                        <p className="pricing-trust-subtitle">
                            We never sell your data. We never share your data. Cancel anytime with zero friction.
                        </p>
                        <div className="pricing-trust-grid">
                            {[
                                { icon: "shield", title: "Secure Supabase", desc: "AES-256 encryption" },
                                { icon: "cloud", title: "Cloud Sync", desc: "All devices, always" },
                                { icon: "eye", title: "Privacy First", desc: "Zero data selling" },
                                { icon: "refresh", title: "Auto Backups", desc: "Never lose data" }
                            ].map((item, idx) => (
                                <div key={idx} className="pricing-trust-item">
                                    <div className="pricing-trust-icon">
                                        {item.icon === "shield" && (
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                                            </svg>
                                        )}
                                        {item.icon === "cloud" && (
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"/>
                                            </svg>
                                        )}
                                        {item.icon === "eye" && (
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.515a4 4 0 00-5.478-5.478z" clipRule="evenodd"/>
                                            </svg>
                                        )}
                                        {item.icon === "refresh" && (
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd"/>
                                            </svg>
                                        )}
                                    </div>
                                    <span className="pricing-trust-item-title">{item.title}</span>
                                    <span className="pricing-trust-item-desc">{item.desc}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section Divider */}
                <div className="pricing-section-divider" />

                {/* ============================================ */}
                {/* FAQ SECTION */}
                {/* ============================================ */}
                <section className="pricing-faq-section" aria-labelledby="faq-heading">
                    <div className="pricing-faq-container">
                        <div className="pricing-section-header">
                            <h2 id="faq-heading" className="pricing-section-title">
                                Frequently Asked Questions
                            </h2>
                            <p className="pricing-section-subtitle">
                                Everything you need to know before getting started
                            </p>
                        </div>
                        
                        <div className="pricing-faq-list">
                            {[
                                { q: 'Why should I upgrade to Premium?', a: 'Premium unlocks unlimited subscription tracking, AI-powered savings recommendations, hidden cost detection, and one-click cancellation links. The average user finds $240+ in yearly savings — Premium pays for itself with just one forgotten subscription caught.' },
                                { q: 'What exactly does Premium unlock?', a: 'Premium includes everything in Free plus: unlimited subscriptions (vs. 5 in Free), AI Savings Coach & Cancel Suggestions, Per-Day Cost Calculator & Hidden Costs Detector, Price Comparison Table & Annual Savings Tracker, Category Burn Rate analysis, Auto cancellation links + step-by-step guidance, Offline mode + Secure Supabase backend, Full iOS & Android support.' },
                                { q: 'Is my data safe?', a: 'Absolutely. We use Supabase with AES-256 encryption — the same standard banks use. We never sell your data, never share it with third parties, and you can export or delete everything at any time. Your subscription data belongs to you, period.' },
                                { q: 'Does the Free plan expire?', a: 'Never. Free is free forever — no trials, no expiration dates, no bait-and-switch. You can use the Free plan indefinitely with up to 5 subscriptions, cloud sync, renewal reminders, and basic analytics. Upgrade only when you need more.' },
                                { q: 'Is AI required to use The Renvo?', a: 'Not at all. The Renvo works perfectly as a manual subscription tracker without any AI features. The Free plan has zero AI — it\'s pure subscription management. AI features in Premium are optional enhancements that provide smart recommendations, but you\'re always in control.' },
                                { q: 'Can I cancel Premium anytime?', a: 'Yes, zero friction. Cancel in two taps from the app settings. You\'ll keep Premium features until the end of your billing period, then automatically revert to Free. We also offer a 7-day money-back guarantee if Premium isn\'t right for you.' }
                            ].map((faq, index) => (
                                <div key={index} className="pricing-faq-item">
                                    <button 
                                        onClick={() => toggleFaq(index)} 
                                        className="pricing-faq-question"
                                        aria-expanded={openFaq === index}
                                    >
                                        <span>{faq.q}</span>
                                        <svg 
                                            className={`pricing-faq-icon ${openFaq === index ? 'rotate-180' : ''}`} 
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    <div className={`pricing-faq-answer ${openFaq === index ? 'open' : ''}`}>
                                        <p>{faq.a}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ============================================ */}
                {/* FINAL CTA SECTION */}
                {/* ============================================ */}
                <section className="pricing-cta-section" aria-labelledby="final-cta-heading">
                    <div className="pricing-cta-container">
                        <h2 id="final-cta-heading" className="pricing-cta-title">
                            Ready to Stop Wasting Money?
                        </h2>
                        <p className="pricing-cta-subtitle">
                            Join thousands who've taken control of their subscriptions. Start free today, upgrade when you're ready.
                        </p>
                        <div className="pricing-cta-buttons">
                            <Link to="#" className="pricing-cta-button pricing-cta-button-primary">
                                Start Free — No Credit Card
                            </Link>
                            <Link to="#" className="pricing-cta-button pricing-cta-button-secondary">
                                Upgrade to Premium
                            </Link>
                        </div>
                        <p className="pricing-cta-note">
                            Available on iOS and Android • Upgrade anytime from the app
                        </p>
                    </div>
                </section>
            </main>

            {/* ============================================ */}
            {/* FOOTER */}
            {/* ============================================ */}
            <footer className="pricing-footer">
                <div className="pricing-footer-container">
                    <div className="pricing-footer-content">
                        <div className="pricing-footer-brand">
                            <Link to="/" className="pricing-footer-logo">
                                The Renvo<span className="pricing-footer-logo-accent">.</span>
                            </Link>
                            <p className="pricing-footer-tagline">
                                Stop silent money leaks. Protect what you earn.
                            </p>
                        </div>
                        <nav className="pricing-footer-nav">
                            <Link to="/" className="pricing-footer-link">Home</Link>
                            <Link to="/features" className="pricing-footer-link">Features</Link>
                            <Link to="/pricing" className="pricing-footer-link pricing-footer-link-active">Pricing</Link>
                        </nav>
                    </div>
                    <div className="pricing-footer-bottom">
                        <p>&copy; 2025 The Renvo. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Pricing;