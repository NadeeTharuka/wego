import React from 'react'

function About() {
  return (
    <div>
        <div className="container-fluid bg-primary py-5 mb-5 hero-header">
    <div className="container py-5">
      <div className="row justify-content-center py-5">
        <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
          <h1 className="display-3 text-white animated slideInDown">
            About Us
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li
                className="breadcrumb-item text-white active"
                aria-current="page"
              >
                About
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
        
            {/* About Start */}
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div
            className="col-lg-6 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ minHeight: 400 }}
          >
            <div className="position-relative h-100">
              <img
                className="img-fluid position-absolute w-100 h-100"
                src="assets/img/about.jpg"
                alt=""
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
            <h6 className="section-title bg-white text-start text-primary pe-3">
              About Us
            </h6>
            <h1 className="mb-4">
              Welcome to <span className="text-primary">Opulent Tours</span>
            </h1>
            <p className="mb-4">
              Welcome to Opulent Tours, your gateway to Sri Lanka, a tropical island that captivates travelers with its golden beaches, misty mountains, ancient cities, and the genuine warmth of its people. A land where culture, nature, and adventure blend beautifully, Sri Lanka promises unforgettable experiences at every turn.
            </p>
            <p className="mb-4">
              Based in Kalutara, Opulent Tours proudly stands as a leading Sri Lankan travel company, with over 15 years of experience in crafting unforgettable travel experiences. Our young and creative team combines local expertise with modern innovation, ensuring every journey is crafted with care, comfort, and a touch of luxury.
            </p>
            <p className="mb-4">
              We design exceptional tours not only across Sri Lanka, but also to India and Thailand, offering everything from exotic getaways and cultural escapes to thrilling adventures. Each itinerary is tailor-made to reflect your style — whether you seek relaxation, exploration, or indulgence.
            </p>
            <p className="mb-4" style={{ fontWeight: '600', color: '#086AD8' }}>
              At Opulent Tours, we believe travel should be as extraordinary as the destinations themselves.
            </p>
          </div>
        </div>
      </div>
    </div>
    {/* About End */}
    </div>
  )
}

export default About