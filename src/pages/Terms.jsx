import React from 'react';
import { Link } from 'react-router-dom';
import './Legal.css';

const Terms = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <header className="legal-header">
          <h1>Terms of Service</h1>
          <p className="legal-date">Last Updated: December 15, 2024 • Version 1.0</p>
        </header>

        <div className="legal-content">
          <section className="legal-section">
            <h2>Agreement to Terms</h2>
            <p>Welcome to Renvo. These Terms of Service govern your access to and use of the Renvo mobile application and website. By accessing or using our Service, you agree to be bound by these Terms and our Privacy Policy.</p>
            <p className="legal-important">If you do not agree to these Terms, you may not access or use the Service.</p>
          </section>

          <section className="legal-section">
            <h2>1. Service Description</h2>
            <p>Renvo helps you track recurring subscriptions, receive renewal reminders, analyze spending patterns, and manage subscription data across devices.</p>
            <p>The Service is provided "as is" and "as available." We strive for 99.9% uptime but do not guarantee uninterrupted access.</p>
          </section>

          <section className="legal-section">
            <h2>2. Account Registration</h2>
            <p>You are responsible for:</p>
            <ul>
              <li>Maintaining password confidentiality</li>
              <li>All activities under your account</li>
              <li>Notifying us of unauthorized access</li>
            </ul>
            <p>You must be at least 13 years old (16 in the EU) to use the Service.</p>
          </section>

          <section className="legal-section">
            <h2>3. Subscription Plans</h2>
            <h3>Free Plan</h3>
            <ul>
              <li>Track up to 5 subscriptions</li>
              <li>Basic analytics</li>
              <li>Cloud sync and reminders</li>
            </ul>
            
            <h3>Premium Plans</h3>
            <ul>
              <li><strong>Monthly ($4.99):</strong> Unlimited subscriptions</li>
              <li><strong>Yearly ($39):</strong> Save 33% (2 months free)</li>
              <li>Advanced analytics and priority support</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. Billing and Payments</h2>
            <p><strong>Payment Processing:</strong> Web subscriptions via Stripe, iOS via Apple In-App Purchase.</p>
            <p><strong>Automatic Renewal:</strong> Subscriptions renew automatically unless canceled. We'll notify you of price changes 30 days in advance.</p>
            <p><strong>Cancellation:</strong> Cancel anytime. Service continues until end of billing period with no partial refunds.</p>
          </section>

          <section className="legal-section">
            <h2>5. Refund Policy</h2>
            <div className="highlight-box">
              <h3>7-Day Money-Back Guarantee</h3>
              <p>First-time Premium subscribers can request a full refund within 7 days.</p>
            </div>
            <p>Contact <a href="mailto:support@therenvo.com">support@therenvo.com</a> to request a refund. Refunds processed within 5-10 business days.</p>
            <p>iOS refunds are handled by Apple through their refund process.</p>
          </section>

          <section className="legal-section">
            <h2>6. Acceptable Use Policy</h2>
            <p>You agree NOT to:</p>
            <ul>
              <li>Violate laws or regulations</li>
              <li>Share account credentials</li>
              <li>Reverse engineer the Service</li>
              <li>Use automated tools without permission</li>
              <li>Create multiple accounts to circumvent limits</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>7. Disclaimers and Limitations</h2>
            <p>THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND.</p>
            <p>Renvo is a tracking tool only - we do not provide financial, tax, or legal advice.</p>
            <p><strong>Liability Limit:</strong> Our total liability is limited to the amount you paid in the last 12 months or $100, whichever is greater.</p>
          </section>

          <section className="legal-section">
            <h2>8. Contact Information</h2>
            <div className="contact-info">
              <p><strong>General Support:</strong> <a href="mailto:support@therenvo.com">support@therenvo.com</a></p>
              <p><strong>Legal & Privacy:</strong> <a href="mailto:contact@therenvo.com">contact@therenvo.com</a></p>
              <p><strong>Response Time:</strong> 24-48 hours</p>
            </div>
          </section>

          <div className="legal-footer">
            <Link to="/privacy" className="legal-link">Privacy Policy →</Link>
            <Link to="/" className="legal-link">Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;