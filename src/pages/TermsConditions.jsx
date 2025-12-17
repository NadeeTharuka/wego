// FILE PATH: src/pages/TermsConditions.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './TermsConditions.css';

const TermsConditions = () => {
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
                Terms & Conditions
              </h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <Link to="/" className="text-white">Home</Link>
                  </li>
                  <li className="breadcrumb-item text-white active" aria-current="page">
                    Terms & Conditions
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Terms & Conditions Content */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="terms-content">
                <h2 className="text-primary mb-4">USER AGREEMENT – Opulent Tours</h2>
                <p className="mb-4">
                  Welcome to the official website of Opulent Tours. By browsing or using this website, you agree to comply with and be bound by our Terms and Conditions and Privacy Policy, which together govern your relationship with Opulent Tours. If you do not agree with any part of these Terms, please refrain from using the site. This website is owned and operated by Opulent Tours, located at Duwa Temple Road, Kalutara South, Sri Lanka, and backed by 15 years of experience in the travel industry. By using this site, you confirm that you are at least 18 years of age and legally authorized to make travel-related bookings, and you accept full financial responsibility for all actions taken under your account. You agree not to use this website or any of its content for any unlawful or prohibited purpose. Opulent Tours works with various suppliers across Sri Lanka to provide travel services, and therefore, all bookings made through this site are also subject to the individual terms and conditions of these suppliers. Failure to comply with a supplier's conditions may result in cancellation of your booking, denial of service, loss of payments made, or additional costs charged to you. All information displayed on this website serves as an invitation for you to submit a booking request; it does not constitute a guaranteed offer. All arrangements remain subject to availability until formally confirmed by us. Reservations for hotels or ground arrangements will only be confirmed upon receipt of valid credit card details and payment of the required deposit or full amount. In certain cases, a non-refundable deposit may be required to secure your booking.
                </p>

                <h3 className="text-primary mb-3 mt-5">TERMS AND CONDITIONS FOR BOOKING</h3>
                <p className="mb-4">
                  Your booking will be confirmed only after we receive your written confirmation together with either the full payment or a non-refundable deposit of 20% of the total value of your travel package. (This requirement may be waived at our sole discretion.)
                </p>
                <p className="mb-4">
                  For Peak Season reservations, an advance payment of 50% of the total package value is required.
                </p>
                <p className="mb-4">
                  If your booking is made within 30 days prior to your arrival in Sri Lanka, full payment must be made at the time of confirming the booking.
                </p>
                <p className="mb-4">
                  By submitting full payment or the required deposit along with your written confirmation, you indicate your agreement to these Terms and Conditions.
                </p>

                <h3 className="text-primary mb-3 mt-5">FINAL PAYMENT</h3>
                <p className="mb-4">
                  Any remaining balance for your travel package must be settled no later than 30 days before your arrival in Sri Lanka. If we do not receive the final payment by this deadline, we reserve the right to consider the booking as cancelled by you.
                </p>

                <h3 className="text-primary mb-3 mt-5">PRICE POLICY</h3>
                <h4 className="mb-3">Rates and Price Changes:</h4>
                <p className="mb-4">
                  We reserve the right to adjust our prices if there are changes in exchange rates or if our suppliers, wholesalers, or service providers increase their prices. Should the cost of any service rise due to currency fluctuations, supplier rate changes, new taxes, or any other reason, you will be required to pay the additional amount once we notify you. If you choose not to accept the increase, you may cancel your booking; however, standard cancellation fees may apply. We cannot be held responsible for any increase in prices beyond our control.
                </p>
                <p className="mb-4">
                  All rates quoted are based on the prices valid at the time of providing your quotation. These prices may change before your travel date. All prices are subject to availability and may be altered or withdrawn at any time without prior notice.
                </p>
                <p className="mb-4">
                  All prices are quoted in United States Dollars (USD).
                </p>

                <h3 className="text-primary mb-3 mt-5">AMENDMENTS AND CANCELLATIONS</h3>
                <h4 className="mb-3">Changes to the Itinerary After Your Holiday Begins:</h4>
                <p className="mb-4">
                  Any modifications or cancellations made after your travel program has commenced may result in additional charges or penalties. No refunds will be provided for any unused services or for cancellations made after the start of your travel arrangements, regardless of the reason.
                </p>
                <p className="mb-4">
                  While we make every effort to deliver all services as confirmed, we reserve the right to make reasonable changes to your itinerary without prior notice if deemed necessary or appropriate at our discretion.
                </p>

                <h4 className="mb-3">Standard Cancellation Policy</h4>
                <p className="mb-4">
                  All cancellations must be submitted to us in writing and will take effect from the date we receive your notification. The following cancellation charges will apply:
                </p>
                <ul className="list-unstyled mb-4">
                  <li className="mb-2"><i className="fa fa-check text-primary me-2"></i>31 to 60 days before arrival: Deposit will be forfeited</li>
                  <li className="mb-2"><i className="fa fa-check text-primary me-2"></i>15 to 30 days before arrival: 25% of the total ground arrangement cost</li>
                  <li className="mb-2"><i className="fa fa-check text-primary me-2"></i>08 to 14 days before arrival: 50% of the total ground arrangement cost</li>
                  <li className="mb-2"><i className="fa fa-check text-primary me-2"></i>07 days or less before arrival: No refund of the total ground arrangement cost</li>
                </ul>

                <h4 className="mb-3">Special Cancellation Conditions</h4>
                <p className="mb-4">
                  Some hotels, tours, or special packages may have their own additional cancellation fees. These specific conditions will be communicated to you clearly in writing at the time of booking.
                </p>
                <p className="mb-4">
                  Please note that our cancellation terms take precedence over any differing cancellation policies set by individual service providers or suppliers.
                </p>

                <h3 className="text-primary mb-3 mt-5">INTERNATIONAL AND DOMESTIC AIR BOOKINGS</h3>
                <p className="mb-4">
                  Since your ground travel arrangements may need to coordinate with international or domestic flight schedules, it is your responsibility or that of the travelers in your group to inform us promptly of all flight details, including flight numbers, arrival times, and any changes that may occur. Accurate and up-to-date information is essential to ensure smooth transfers and arrangements.
                </p>

                <h3 className="text-primary mb-3 mt-5">TRAVEL INSURANCE</h3>
                <p className="mb-4">
                  We strongly advise all travelers to obtain comprehensive personal travel insurance at the time of booking. It is your responsibility to ensure that the insurance policy you select provides adequate coverage for your entire trip. By proceeding with your booking, you confirm that you have arranged appropriate travel insurance for all members of your party.
                </p>
                <p className="mb-4">
                  If needed, Opulent Tours can assist in arranging personal travel insurance for the duration of your stay in Sri Lanka. Please contact us for further information.
                </p>

                <h3 className="text-primary mb-3 mt-5">RESPONSIBILITY</h3>
                <p className="mb-4">
                  Opulent Tours accepts liability only for incidents that result directly from our proven negligence, or that of our suppliers, in relation to services forming part of your holiday itinerary, provided all your accommodation and transfers are arranged by us for the full duration of your stay. This applies to situations involving illness, injury, or death.
                </p>
                <p className="mb-4">
                  Note: We do not accept liability for the negligence of suppliers in accommodation-only bookings. In such cases, we act solely as a booking agent, and accommodation is chosen at your own risk.
                </p>
                <p className="mb-4">
                  Where only part of your holiday itinerary is arranged by us, we act solely as a coordinator. This applies to services provided by third-party operators, including hotels, lodges, restaurants, road transport, professional guides, air charters, boating, rafting, kayaking, bush walking, trekking, and climbing activities. All bookings are therefore subject to the limitations of liability imposed by the respective suppliers, and Opulent Tours cannot be held responsible for failures of any component of the holiday that we do not directly arrange. This includes any issues arising from accommodation-only bookings or self-arranged transport.
                </p>
                <p className="mb-4">
                  There may be circumstances beyond our control, such as war, threat of war, riots, civil unrest, strikes, terrorist activity, natural or nuclear disasters, fires, severe weather, or other force majeure events, which may make it impossible to fulfill your holiday contract. In such cases, we shall not be liable for compensation resulting from cancellation, delay, curtailment, or changes to your holiday.
                </p>
                <p className="mb-4">
                  Opulent Tours assumes no responsibility for loss, damage to baggage or personal property, injury, illness, or death arising directly or indirectly from accidents, transport failures, strikes, wars, natural disasters, or other events beyond our control.
                </p>
                <p className="mb-4">
                  We do, however, accept responsibility for ensuring that the holidays you book with us are provided as described and that the services we are contractually obliged to supply meet a reasonable standard. Changes may occasionally occur, particularly during the low season, including temporary unavailability of certain facilities due to maintenance, weather, power cuts, or low demand. In such cases, we cannot be held responsible for the unavailability of advertised facilities.
                </p>
                <p className="mb-4">
                  If alternative accommodation or services need to be provided, we will ensure they are of a similar or higher standard than originally booked.
                </p>

                <h3 className="text-primary mb-3 mt-5">BREAKAGES AND DAMAGE</h3>
                <p className="mb-4">
                  You are responsible for any breakages, loss, or damage caused by yourself or any member of your party during your stay at the accommodation. It is your obligation to either repair the damage or make full payment to the supplier before departure. Additionally, you agree to indemnify Opulent Tours against any losses, claims, or damages that may arise as a result.
                </p>

                <h3 className="text-primary mb-3 mt-5">BEHAVIOUR</h3>
                <p className="mb-4">
                  You are expected to comply with all applicable laws and regulations related to air travel, other modes of transport, and your conduct during your holiday. If, in the opinion of our suppliers, service providers, or guide representatives, your behavior is disruptive, causes distress, or poses a risk to other clients, our staff, or third parties, your holiday may be terminated. Opulent Tours will not be responsible for any costs or claims incurred as a result.
                </p>

                <h3 className="text-primary mb-3 mt-5">SEVERABILITY</h3>
                <p className="mb-4">
                  If any provision of these Booking Conditions is found to be invalid or unenforceable under the law, all remaining provisions shall continue to be valid and enforceable to the fullest extent permitted by law.
                </p>

                <h3 className="text-primary mb-3 mt-5">ARBITRATION</h3>
                <p className="mb-4">
                  By confirming your booking with us, a contract is formed between Opulent Tours and you. This contract, along with these Booking Terms and Conditions, shall be governed in all respects by the laws of Sri Lanka.
                </p>

                <h3 className="text-primary mb-3 mt-5">COMPLAINTS</h3>
                <p className="mb-4">
                  We aim to resolve any reasonable complaints regarding the quality of your travel or accommodation arrangements in an amicable manner. However, you should first attempt to address any issues directly with the service provider (such as the hotel, airline, or other suppliers) while keeping your Opulent Tours representative or Travel Counsellor who handled your booking informed of the situation as it occurs.
                </p>
                <p className="mb-4">
                  If the complaint cannot be resolved locally, you must submit a formal written complaint to us within 28 days of your return. Your complaint should include all relevant details and documentation. It is a condition of this agreement that you first communicate any problem to the service provider and inform your Opulent Tours representative. If the issue remains unresolved, you may then follow up with a written complaint to us. Failure to follow this procedure may prevent us from taking responsibility, as we would be deprived of the opportunity to investigate and resolve the matter.
                </p>
                <p className="mb-4">
                  To help us continually improve our services and products, we may provide a Customer Survey for you to complete, and we appreciate your honest feedback.
                </p>

                <h3 className="text-primary mb-3 mt-5">EXCLUSION OF LIABILITY</h3>
                <p className="mb-4">
                  Opulent Tours does not guarantee that all information on this website is completely free from errors or omissions. However, we will make reasonable efforts to correct any mistakes once they are brought to our attention. Any opinions expressed on the website are our own and, while we strive for accuracy, they may be subjective to some extent.
                </p>
                <p className="mb-4">
                  All recommendations, opinions, and pricing related to properties or destinations are provided for guidance only. By using our website, you acknowledge that any reliance on this content, including recommendations for hotels, products, or services, is at your own risk.
                </p>
                <p className="mb-4">
                  Our website may contain links to third-party websites, provided for your convenience and reference. Opulent Tours does not own or control these external websites and is not responsible for their content or your use of them.
                </p>
                <p className="mb-4">
                  We have made every effort to accurately describe each hotel, service, or experience and to provide up-to-date information via our website and communications. However, we cannot be held liable for any discrepancies between our website content (including text and images), communications sent to you (such as emails or itineraries), and the actual service or property you receive.
                </p>

                <h3 className="text-primary mb-3 mt-5">INFORMATION PROVIDED BY YOU</h3>
                <p className="mb-4">
                  All information you provide to us must be accurate and truthful. We will treat your personal information confidentially and will not share it with third parties. We maintain a strict anti-fraud policy and take appropriate measures to protect sensitive information, including credit card details.
                </p>

                <h3 className="text-primary mb-3 mt-5">NATURE OF OVERSEAS TRAVEL</h3>
                <p className="mb-4">
                  Opulent Tours offers a wide range of holidays, from luxury itineraries to more budget-conscious programs. While we plan every trip meticulously, travelers should be aware that amenities and infrastructure in Sri Lanka may sometimes be less developed than expected. Delays, minor inconveniences, and natural risks may occur during travel. Tropical environments may include insects in accommodation.
                </p>
                <p className="mb-4">
                  By booking any of our arrangements, you acknowledge these possibilities and accept them as part of the travel experience. Travelers are encouraged to take reasonable precautions at all times and to familiarize themselves with up-to-date travel information before their holiday.
                </p>

                <h3 className="text-primary mb-3 mt-5">SHOPPING</h3>
                <p className="mb-4">
                  Opulent Tours does not recommend or guarantee the value or quality of any additional products that are not explicitly listed in your travel itinerary, even if such products were discussed with our staff or representatives. The responsibility for determining the value and suitability of any such purchases rests entirely with you. Opulent Tours is not obligated to intervene in these situations and cannot be held liable for any subsequent complaints or issues arising from them.
                </p>

                <h3 className="text-primary mb-3 mt-5">INDEMNIFICATION</h3>
                <p className="mb-4">
                  You agree to defend, indemnify, and hold harmless Opulent Tours, its suppliers, officers, directors, employees, and agents from and against any claims, demands, actions, losses, damages, fines, penalties, or costs (including reasonable legal and accounting fees) arising from:
                </p>
                <ol className="mb-4">
                  <li>Your breach of this agreement or any referenced documents,</li>
                  <li>Your violation of any law or the rights of a third party, or</li>
                  <li>Your use of this website.</li>
                </ol>
                <p className="mb-4">
                  This includes claims brought by you, on your behalf, or by third parties in excess of our stated liability.
                </p>

                <h3 className="text-primary mb-3 mt-5">ELECTRONIC COMMUNICATIONS</h3>
                <p className="mb-4">
                  Whenever you interact with us electronically, through our website, email, or fax, you consent to receive communications from us via the same channels. All notices, disclosures, agreements, and other communications sent electronically or by fax are considered legally valid and satisfy any requirement for written communication.
                </p>
                <p className="mb-4">
                  While we strive for accuracy, Opulent Tours makes no warranties or representations, express or implied, regarding the quality, accuracy, feasibility, or reliability of content on our website or related services. We are not liable for any viruses or electronic issues transmitted through the site. Users rely on information from the site at their own risk.
                </p>
                <p className="mb-4">
                  We do not take responsibility for user-generated comments in interactive areas of the website, but we reserve the right to moderate content to ensure compliance with Sri Lankan law.
                </p>

                <h3 className="text-primary mb-3 mt-5">COPYRIGHT</h3>
                <p className="mb-4">
                  All content on this website, including text, images, and other materials, is the intellectual property of Opulent Tours. Copying or using any part of this content for commercial or business purposes is strictly prohibited.
                </p>

                <h3 className="text-primary mb-3 mt-5">GOVERNING LAW AND JURISDICTION</h3>
                <p className="mb-4">
                  These Terms and Conditions are governed by and interpreted in accordance with the laws of Sri Lanka. Any disputes arising from these Terms or your use of our services shall be subject to the exclusive jurisdiction of the courts of Sri Lanka.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;