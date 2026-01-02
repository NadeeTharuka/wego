// WhatsAppFloat.jsx
import React from 'react';
import './WhatsAppFloat.css';

function WhatsAppFloat() {
  const phoneNumber = '+94742343484'; // WhatsApp number without spaces
  const message = 'Hello! I would like to inquire about your tour packages.'; // Default message
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="whatsapp-float">
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
        aria-label="Contact us on WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
        <span className="whatsapp-tooltip">Chat with us on WhatsApp</span>
      </a>
    </div>
  );
}

export default WhatsAppFloat;