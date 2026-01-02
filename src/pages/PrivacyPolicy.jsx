// FILE PATH: src/pages/PrivacyPolicy.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div>
      {/* Hero Header */}
      <div 
        className="container-fluid bg-primary mb-5 hero-header"
        style={{
          background: `linear-gradient(rgba(20, 20, 31, 0.5), rgba(20, 20, 31, 0.5)), url('https://images.unsplash.com/photo-1570789210967-2cac24afeb00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          minHeight: '40vh',
          paddingTop: '5rem',
          paddingBottom: '5rem'
        }}
      >
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white animated slideInDown mb-4">
                Privacy Policy
              </h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <Link to="/" className="text-white">Home</Link>
                  </li>
                  <li className="breadcrumb-item text-white active" aria-current="page">
                    Privacy Policy
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Policy Content */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="policy-content">
                <h2 className="text-primary mb-4" style={{fontSize: '2.2rem', fontWeight: '700'}}>Privacy Policy – Opulent Tours</h2>
                <p className="mb-4" style={{color: '#333', fontSize: '1.15rem', lineHeight: '1.7'}}>
                  Opulent Tours is a trusted tour company based in Kalutara, Sri Lanka, with over 15 years of experience in delivering unforgettable travel experiences. Your privacy is important to us, and we are committed to protecting the personal information of all our website visitors, clients, and partners.
                </p>
                <p className="mb-4" style={{color: '#333', fontSize: '1.15rem', lineHeight: '1.7'}}>
                  This Privacy Policy explains what information we collect, how we collect it, why we collect it, and how we use and protect your personal data.
                </p>

                <h3 className="text-primary mb-3 mt-5" style={{fontSize: '1.8rem', fontWeight: '600'}}>1. Information We Collect</h3>
                <p className="mb-3" style={{color: '#333', fontSize: '1.15rem', lineHeight: '1.7'}}>
                  We collect personal data only when it is necessary to provide our services or when you willingly provide it to us. This may include information submitted through:
                </p>
                <ul className="list-unstyled mb-4">
                  <li className="mb-2" style={{color: '#333', fontSize: '1.15rem', lineHeight: '1.7'}}><i className="fa fa-check text-primary me-2"></i>Our website forms</li>
                  <li className="mb-2" style={{color: '#333', fontSize: '1.15rem', lineHeight: '1.7'}}><i className="fa fa-check text-primary me-2"></i>Email or phone inquiries</li>
                  <li className="mb-2" style={{color: '#333', fontSize: '1.15rem', lineHeight: '1.7'}}><i className="fa fa-check text-primary me-2"></i>Social media messages</li>
                  <li className="mb-2" style={{color: '#333', fontSize: '1.15rem', lineHeight: '1.7'}}><i className="fa fa-check text-primary me-2"></i>Direct bookings and reservations</li>
                  <li className="mb-2" style={{color: '#333', fontSize: '1.15rem', lineHeight: '1.7'}}><i className="fa fa-check text-primary me-2"></i>Travel-related service requests</li>
                  <li className="mb-2" style={{color: '#333', fontSize: '1.15rem', lineHeight: '1.7'}}><i className="fa fa-check text-primary me-2"></i>In-person meetings or events</li>
                </ul>
                <p className="mb-4" style={{color: '#333', fontSize: '1.15rem', lineHeight: '1.7'}}>
                  Personal data we may collect includes:
                </p>
                <ul className="list-unstyled mb-4">
                  <li className="mb-2" style={{color: '#333', fontSize: '1.15rem', lineHeight: '1.7'}}><i className="fa fa-check text-primary me-2"></i>Full name</li>
                  <li className="mb-2" style={{color: '#333', fontSize: '1.15rem', lineHeight: '1.7'}}><i className="fa fa-check text-primary me-2"></i>Email address</li>
                  <li className="mb-2" style={{color: '#333', fontSize: '1.15rem', lineHeight: '1.7'}}><i className="fa fa-check text-primary me-2"></i>Phone number</li>
                  <li className="mb-2" style={{color: '#333', fontSize: '1.15rem', lineHeight: '1.7'}}><i className="fa fa-check text-primary me-2"></i>Country of residence</li>
                  <li className="mb-2" style={{color: '#333', fontSize: '1.15rem', lineHeight: '1.7'}}><i className="fa fa-check text-primary me-2"></i>Travel preferences</li>
                  <li className="mb-2" style={{color: '#333', fontSize: '1.15rem', lineHeight: '1.7'}}><i className="fa fa-check text-primary me-2"></i>Any additional information you choose to share with us</li>
                </ul>
                <p className="mb-4" style={{color: '#333', fontSize: '1.15rem', lineHeight: '1.7'}}>
                  We always make sure to inform you whenever personal data is being collected.
                </p>

                <h3 className="text-primary mb-3 mt-5" style={{fontSize: '1.8rem', fontWeight: '600'}}>2. How We Collect Personal Information</h3>
                <p className="mb-4" style={{color: '#333', fontSize: '1.15rem', lineHeight: '1.7'}}>
                  We collect information through:
                </p>
                <ul className="list-unstyled mb-4">
                  <li className="mb-2" style={{color: '#333', fontSize: '1.15rem', lineHeight: '1.7'}}><i className="fa fa-check text-primary me-2"></i>Online forms on our website</li>
                  <li className="mb-2" style={{color: '#333', fontSize: '1.15rem', lineHeight: '1.7'}}><i className="fa fa-check text-primary me-2"></i>Direct communication (calls, WhatsApp, SMS, email)</li>
                  <li className="mb-2" style={{color: '#333', fontSize: '1.15rem', lineHeight: '1.7'}}><i className="fa fa-check text-primary me-2"></i>Booking and reservation systems</li>
                  <li className="mb-2" style={{color: '#333', fontSize: '1.15rem', lineHeight: '1.7'}}><i className="fa fa-check text-primary me-2"></i>Social media platforms</li>
                  <li className="mb-2" style={{color: '#333', fontSize: '1.15rem', lineHeight: '1.7'}}><i className="fa fa-check text-primary me-2"></i>Cookies and website analytics (non-identifiable usage data)</li>
                </ul>

                <h3 className="text-primary mb-3 mt-5" style={{fontSize: '1.8rem', fontWeight: '600'}}>3. Why We Collect Your Information</h3>
                <p className="mb-4" style={{color: '#333', fontSize: '1.15rem', lineHeight: '1.7'}}>
                  Your personal data is used solely for the purpose of delivering a smooth, safe, and personalized travel experience. This includes:
                </p>
                <ul className="list-unstyled mb-4">
                  <li className="mb-2" style={{color: '#333', fontSize: '1.15rem', lineHeight: '1.7'}}><i className="fa fa-check text-primary me-2"></i>Providing travel quotes</li>
                  <li className="mb-2" style={{color: '#333', fontSize: '1.15rem', lineHeight: '1.7'}}><i className="fa fa-check text-primary me-2"></i>Discussing and planning travel arrangements</li>
                  <li className="mb-2" style={{color: '#333', fontSize: '1.15rem', lineHeight: '1.7'}}><i className="fa fa-check text-primary me-2"></i>Sending requested information</li>
                  <li className="mb-2" style={{color: '#333', fontSize: '1.15rem', lineHeight: '1.7'}}><i className="fa fa-check text-primary me-2"></i>Sending e-marketing or relevant travel updates (only with your consent)</li>
                  <li className="mb-2" style={{color: '#333', fontSize: '1.15rem', lineHeight: '1.7'}}><i className="fa fa-check text-primary me-2"></i>Booking and organizing your tour</li>
                  <li className="mb-2" style={{color: '#333', fontSize: '1.15rem', lineHeight: '1.7'}}><i className="fa fa-check text-primary me-2"></i>Requesting feedback on our services</li>
                  <li className="mb-2" style={{color: '#333', fontSize: '1.15rem', lineHeight: '1.7'}}><i className="fa fa-check text-primary me-2"></i>Notifying you about changes or amendments to your booking</li>
                  <li className="mb-2" style={{color: '#333', fontSize: '1.15rem', lineHeight: '1.7'}}><i className="fa fa-check text-primary me-2"></i>Notifying you in case of emergencies during your journey</li>
                  <li className="mb-2" style={{color: '#333', fontSize: '1.15rem', lineHeight: '1.7'}}><i className="fa fa-check text-primary me-2"></i>Providing accurate, seamless, and up-to-date service</li>
                  <li className="mb-2" style={{color: '#333', fontSize: '1.15rem', lineHeight: '1.7'}}><i className="fa fa-check text-primary me-2"></i>Informing you about new products, services, promotions, or updates from Opulent Tours</li>
                </ul>

                <h3 className="text-primary mb-3 mt-5" style={{fontSize: '1.8rem', fontWeight: '600'}}>4. How We Use Your Data</h3>
                <p className="mb-4" style={{color: '#333', fontSize: '1.15rem', lineHeight: '1.7'}}>
                  We use your personal data to:
                </p>
                <ul className="list-unstyled mb-4">
                  <li className="mb-2" style={{color: '#333', fontSize: '1.15rem', lineHeight: '1.7'}}><i className="fa fa-check text-primary me-2"></i>Communicate with you</li>
                  <li className="mb-2" style={{color: '#333', fontSize: '1.15rem', lineHeight: '1.7'}}><i className="fa fa-check text-primary me-2"></i>Complete bookings and reservations</li>
                  <li className="mb-2" style={{color: '#333', fontSize: '1.15rem', lineHeight: '1.7'}}><i className="fa fa-check text-primary me-2"></i>Ensure your safety during travel</li>
                  <li className="mb-2" style={{color: '#333', fontSize: '1.15rem', lineHeight: '1.7'}}><i className="fa fa-check text-primary me-2"></i>Improve our services and customer experience</li>
                </ul>
                <p className="mb-4" style={{color: '#333', fontSize: '1.15rem', lineHeight: '1.7'}}>
                  We never use your data in ways that violate your privacy or trust.
                </p>

                <h3 className="text-primary mb-3 mt-5" style={{fontSize: '1.8rem', fontWeight: '600'}}>5. Data Sharing and Disclosure</h3>
                <p className="mb-4" style={{color: '#333', fontSize: '1.15rem', lineHeight: '1.7'}}>
                  We do not sell, rent, or trade your personal information to any third party.
                  Your data may only be shared with:
                </p>
                <ul className="list-unstyled mb-4">
                  <li className="mb-2" style={{color: '#333', fontSize: '1.15rem', lineHeight: '1.7'}}><i className="fa fa-check text-primary me-2"></i>Trusted service providers directly involved in your tour (e.g., hotels, transport providers, guides)</li>
                  <li className="mb-2" style={{color: '#333', fontSize: '1.15rem', lineHeight: '1.7'}}><i className="fa fa-check text-primary me-2"></i>Authorities in case of emergencies or when legally required</li>
                </ul>
                <p className="mb-4" style={{color: '#333', fontSize: '1.15rem', lineHeight: '1.7'}}>
                  These parties receive only the information necessary to deliver the service safely and effectively.
                </p>

                <h3 className="text-primary mb-3 mt-5" style={{fontSize: '1.8rem', fontWeight: '600'}}>6. Data Protection and Security</h3>
                <p className="mb-4" style={{color: '#333', fontSize: '1.15rem', lineHeight: '1.7'}}>
                  We take all reasonable technical and organizational measures to protect your personal information from:
                </p>
                <ul className="list-unstyled mb-4">
                  <li className="mb-2" style={{color: '#333', fontSize: '1.15rem', lineHeight: '1.7'}}><i className="fa fa-check text-primary me-2"></i>Unauthorized access</li>
                  <li className="mb-2" style={{color: '#333', fontSize: '1.15rem', lineHeight: '1.7'}}><i className="fa fa-check text-primary me-2"></i>Loss</li>
                  <li className="mb-2" style={{color: '#333', fontSize: '1.15rem', lineHeight: '1.7'}}><i className="fa fa-check text-primary me-2"></i>Misuse</li>
                  <li className="mb-2" style={{color: '#333', fontSize: '1.15rem', lineHeight: '1.7'}}><i className="fa fa-check text-primary me-2"></i>Alteration or disclosure</li>
                </ul>
                <p className="mb-4" style={{color: '#333', fontSize: '1.15rem', lineHeight: '1.7'}}>
                  Your data is stored securely and accessed only by authorized personnel.
                </p>

                <h3 className="text-primary mb-3 mt-5" style={{fontSize: '1.8rem', fontWeight: '600'}}>7. Your Rights</h3>
                <p className="mb-4" style={{color: '#333', fontSize: '1.15rem', lineHeight: '1.7'}}>
                  As an individual, you have the right to:
                </p>
                <ul className="list-unstyled mb-4">
                  <li className="mb-2" style={{color: '#333', fontSize: '1.15rem', lineHeight: '1.7'}}><i className="fa fa-check text-primary me-2"></i>Request access to your personal data</li>
                  <li className="mb-2" style={{color: '#333', fontSize: '1.15rem', lineHeight: '1.7'}}><i className="fa fa-check text-primary me-2"></i>Correct or update your information</li>
                  <li className="mb-2" style={{color: '#333', fontSize: '1.15rem', lineHeight: '1.7'}}><i className="fa fa-check text-primary me-2"></i>Request deletion of your data (where legally permitted)</li>
                  <li className="mb-2" style={{color: '#333', fontSize: '1.15rem', lineHeight: '1.7'}}><i className="fa fa-check text-primary me-2"></i>Withdraw consent from marketing communications at any time</li>
                  <li className="mb-2" style={{color: '#333', fontSize: '1.15rem', lineHeight: '1.7'}}><i className="fa fa-check text-primary me-2"></i>Ask how your data is being used</li>
                </ul>
                <p className="mb-4" style={{color: '#333', fontSize: '1.15rem', lineHeight: '1.7'}}>
                  You can contact us at any time with such requests.
                </p>

                <h3 className="text-primary mb-3 mt-5" style={{fontSize: '1.8rem', fontWeight: '600'}}>8. Retention of Data</h3>
                <p className="mb-4" style={{color: '#333', fontSize: '1.15rem', lineHeight: '1.7'}}>
                  We retain your personal information only for as long as necessary to:
                </p>
                <ul className="list-unstyled mb-4">
                  <li className="mb-2" style={{color: '#333', fontSize: '1.15rem', lineHeight: '1.7'}}><i className="fa fa-check text-primary me-2"></i>Fulfill the purposes outlined in this policy</li>
                  <li className="mb-2" style={{color: '#333', fontSize: '1.15rem', lineHeight: '1.7'}}><i className="fa fa-check text-primary me-2"></i>Meet legal, regulatory, or accounting requirements</li>
                </ul>
                <p className="mb-4" style={{color: '#333', fontSize: '1.15rem', lineHeight: '1.7'}}>
                  After this period, your data will be safely deleted or anonymized.
                </p>

                <h3 className="text-primary mb-3 mt-5" style={{fontSize: '1.8rem', fontWeight: '600'}}>9. Updates to This Policy</h3>
                <p className="mb-4" style={{color: '#333', fontSize: '1.15rem', lineHeight: '1.7'}}>
                  We may update this Privacy Policy from time to time to reflect changes in our services or legal requirements. Updated versions will be posted on our website with a revised effective date.
                </p>

                <h3 className="text-primary mb-3 mt-5" style={{fontSize: '1.8rem', fontWeight: '600'}}>10. Contact Us</h3>
                <p className="mb-4" style={{color: '#333', fontSize: '1.15rem', lineHeight: '1.7'}}>
                  If you have questions about this Privacy Policy or wish to exercise your rights, please contact:
                </p>
                <div className="contact-info p-4 rounded" style={{backgroundColor: '#f8f9fa'}}>
                  <p className="mb-2" style={{color: '#333', fontSize: '1.15rem', lineHeight: '1.7'}}><strong>Opulent Tours</strong></p>
                  <p className="mb-2" style={{color: '#333', fontSize: '1.15rem', lineHeight: '1.7'}}>Duwa Temple Road, Kalutara South, Sri Lanka</p>
                  <p className="mb-2" style={{color: '#333', fontSize: '1.15rem', lineHeight: '1.7'}}>Email: opulenttoursinfo@gmail.com</p>
                  <p className="mb-0" style={{color: '#333', fontSize: '1.15rem', lineHeight: '1.7'}}>Phone: 0742343484</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;