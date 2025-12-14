import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Home from './pages/Home.jsx';
import Pricing from './pages/Pricing.jsx';
import Features from './pages/Features.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div>
        <ScrollToTop />
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/features" element={<Features />} />
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;