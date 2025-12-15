import React from 'react';
import { Link } from 'react-router-dom';
import './Legal.css';

const Privacy = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <header className="legal-header">
          <h1>Privacy Policy</h1>
          <p className="legal-date">Last Updated: December 15, 2024 • Version 1.0</p>
        </header>

        <div className="legal-content">
          <section className="legal-section">
            <h2>Introduction</h2>
            <p>Welcome to Renvo. We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and website.</p>
          </section>

          <section className="legal-section">
            <h2>1. Information We Collect</h2>
            <h3>Account Information</h3>
            <ul>
              <li>Email address</li>
              <li>Password (encrypted and securely stored)</li>
              <li>Display name (optional)</li>
              <li>Account preferences and settings</li>
            </ul>
            
            <h3>Subscription Data</h3>
            <ul>
              <li>Subscription service names</li>
              <li>Billing amounts and currencies</li>
              <li>Renewal dates and billing cycles</li>
              <li>Custom categories, notes, and colors</li>
            </ul>

            <h3>Payment Information</h3>
            <p>Payment information is collected and processed by our payment processors (Stripe for web, Apple App Store for iOS). We do not store complete credit card numbers or payment card details on our servers.</p>
          </section>

          <section className="legal-section">
            <h2>2. How We Use Your Information</h2>
            <ul>
              <li>Create and manage your account</li>
              <li>Store and sync your subscription data across devices</li>
              <li>Send renewal reminders and notifications</li>
              <li>Process premium subscription purchases</li>
              <li>Provide customer support</li>
              <li>Improve features and user experience</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>3. Third-Party Services</h2>
            <p>We use the following trusted third-party services:</p>
            <ul>
              <li><strong>Supabase:</strong> Database and authentication</li>
              <li><strong>Stripe:</strong> Payment processing (web)</li>
              <li><strong>Apple:</strong> In-App Purchase (iOS)</li>
              <li><strong>Brevo:</strong> Transactional emails</li>
            </ul>
            <p><strong>We do not</strong> sell your personal information to third parties or use your data for targeted advertising.</p>
          </section>

          <section className="legal-section">
            <h2>4. Data Security</h2>
            <p>We implement industry-standard security measures:</p>
            <ul>
              <li>TLS/SSL encryption for all data transmission</li>
              <li>Bcrypt password hashing</li>
              <li>Secure storage (iOS Keychain, Android KeyStore)</li>
              <li>Row-level security in database</li>
              <li>Regular security audits</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>5. Data Retention and Deletion</h2>
            <p>You can delete your account at any time through Settings &gt; Account &gt; Delete Account.</p>
            <ul>
              <li>30-day grace period before permanent deletion</li>
              <li>Account recovery available during grace period</li>
              <li>All personal data permanently deleted after 30 days</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>6. Your Rights</h2>
            <ul>
              <li><strong>Access:</strong> Request a copy of your data</li>
              <li><strong>Correction:</strong> Update inaccurate information</li>
              <li><strong>Deletion:</strong> Delete your account and data</li>
              <li><strong>Portability:</strong> Export data via CSV</li>
            </ul>
            <p><strong>GDPR (EU):</strong> Additional rights for EU users including data portability and objection to processing.</p>
            <p><strong>CCPA (California):</strong> Rights to know, delete, and opt-out (we don't sell data).</p>
          </section>

          <section className="legal-section">
            <h2>7. Children's Privacy</h2>
            <p>Renvo is not intended for children under 13 (or 16 in the EU). We do not knowingly collect information from children.</p>
          </section>

          <section className="legal-section">
            <h2>8. Contact Us</h2>
            <p>For questions about this Privacy Policy or our data practices:</p>
            <div className="contact-info">
              <p><strong>Email:</strong> <a href="mailto:support@therenvo.com">support@therenvo.com</a></p>
              <p><strong>Legal & Privacy:</strong> <a href="mailto:contact@therenvo.com">contact@therenvo.com</a></p>
              <p><strong>Response Time:</strong> 24-48 hours</p>
            </div>
          </section>

          <div className="legal-footer">
            <Link to="/terms" className="legal-link">Terms of Service →</Link>
            <Link to="/" className="legal-link">Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;