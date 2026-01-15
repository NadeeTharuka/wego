import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Packages from './pages/Packages'
import Destination from './pages/Destination'
import Booking from './pages/Booking'
import Team from './pages/Team'
import Testimonial from './pages/Testimonial'
import Error from './pages/Error'
import Contact from './pages/Contact'
import Tours from './pages/Tours'
import PlaceDetails from './pages/PlaceDetails';
import OneDayTourDetails from './pages/OneDayTourDetails';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import WhatsAppFloat from './pages/WhatsAppFloat';

export default function App() {
  useEffect(() => {
    // Aggressively remove scroll-to-top button before it can render
    const removeScrollButton = () => {
      const selectors = [
        '.back-to-top',
        '.btn-lg-square',
        'a.btn.btn-primary.btn-square.back-to-top',
        'a.btn-lg-square',
        '[class*="back-to-top"]',
        '[class*="scroll-top"]',
        'a[href="#"]:not(.navbar a):not(.whatsapp-button)'
      ];

      selectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
          if (!el.closest('.navbar') && !el.closest('.whatsapp-float') && !el.closest('.footer')) {
            el.style.display = 'none';
            el.style.visibility = 'hidden';
            el.style.opacity = '0';
            el.remove();
          }
        });
      });
    };

    // Run immediately - before anything can render
    removeScrollButton();

    // Continuous monitoring during initial page load
    const intervals = [0, 50, 100, 200, 300, 500, 1000];
    intervals.forEach(delay => {
      setTimeout(removeScrollButton, delay);
    });

    // Aggressive MutationObserver - removes elements instantly as they're added
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) {
            // Check if the added node is a scroll button
            const isScrollButton = 
              node.classList?.contains('back-to-top') ||
              node.classList?.contains('btn-lg-square') ||
              node.classList?.contains('scroll-to-top') ||
              (node.tagName === 'A' && node.getAttribute('href') === '#' && 
               !node.closest('.navbar') && !node.closest('.whatsapp-float'));

            if (isScrollButton) {
              node.style.display = 'none';
              node.remove();
            }

            // Also check children of the added node
            if (node.querySelectorAll) {
              const childButtons = node.querySelectorAll('.back-to-top, .btn-lg-square, [class*="scroll-top"]');
              childButtons.forEach(btn => {
                if (!btn.closest('.whatsapp-float')) {
                  btn.style.display = 'none';
                  btn.remove();
                }
              });
            }
          }
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['class', 'style']
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div>
        <Header />
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/tours' element={<Tours />} />
        <Route path='/packages' element={<Packages/>}/>
        <Route path='/destination' element={<Destination/>}/>
        <Route path='/booking' element={<Booking/>}/>
        <Route path='/team' element={<Team/>}/>
        <Route path='/testimonial' element={<Testimonial/>}/>
        <Route path='/error' element={<Error/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path="/place-details" element={<PlaceDetails />} />
        <Route path="/one-day-tour-details" element={<OneDayTourDetails />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        </Routes>
        <Footer />
        <WhatsAppFloat />
    </div>
  )
}