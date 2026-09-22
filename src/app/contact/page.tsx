import React from 'react';
import Link from 'next/link';
import { AppointmentEnquiryForm } from '@/components/forms/AppointmentEnquiryForm';

export const metadata = {
  title: 'Contact & Visit Us — Shri Manmukund Hospital, Amravati',
  description:
    'Book a consultation, ask a question, or just find us. We are here Monday to Saturday, and our emergency line is monitored around the clock.',
};

export default function ContactPage() {
  return (
    <main>
      {/* 1. PAGE HERO */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">·</span>
            <span>Contact &amp; Visit</span>
          </div>

          <div className="page-hero-devanagari">आइए, मिलते हैं</div>
          <h1 className="page-hero-title">
            Come and <em>see us.</em>
          </h1>
          <p className="page-hero-lede">
            Book a consultation, ask a question, or just find us. We are here Monday to Saturday, and our emergency line is monitored around the clock.
          </p>
        </div>
      </section>

      {/* 2. PRIMARY CONTACT CARDS */}
      <section className="primary-contacts">
        <div className="contacts-grid">
          <div className="contact-primary-card">
            <div className="contact-primary-badge">
              <span className="contact-primary-badge-dot"></span>
              For Appointments
            </div>
            <h3 className="contact-primary-title">Book a consultation</h3>
            <p className="contact-primary-desc">
              Call directly to book with either Dr. Vipin or Dr. Swati, or ask questions before booking. Response usually within a few rings.
            </p>
            <a href="tel:+918208927917" className="contact-primary-number">
              +91 82089 27917
            </a>
            <div className="contact-primary-hours">Mon – Sat · 9:00 AM to 9:00 PM</div>
          </div>

          <div className="contact-primary-card contact-primary-card--emergency">
            <div className="contact-primary-badge">
              <span className="contact-primary-badge-dot"></span>
              Emergency Line
            </div>
            <h3 className="contact-primary-title">24 hour urgent care</h3>
            <p className="contact-primary-desc">
              For genuine emergencies including severe pain, heavy bleeding, high fever, or post-procedure concerns. Monitored round the clock.
            </p>
            <a href="tel:+919405404492" className="contact-primary-number">
              +91 94054 04492
            </a>
            <div className="contact-primary-hours">Available 24 hours · Every day</div>
          </div>
        </div>
      </section>

      {/* 3. QUICK INFO GRID */}
      <section className="quick-info">
        <div className="quick-info-grid">
          <div className="quick-info-item">
            <div className="quick-info-icon">📧</div>
            <div className="quick-info-label">Email</div>
            <div className="quick-info-value">
              info@shrimanmukund.com<small>Response within 24 hours</small>
            </div>
          </div>
          <div className="quick-info-item">
            <div className="quick-info-icon">💳</div>
            <div className="quick-info-label">Payment</div>
            <div className="quick-info-value">
              Cash · UPI · Bank Transfer<small>No card machine currently</small>
            </div>
          </div>
          <div className="quick-info-item">
            <div className="quick-info-icon">🏥</div>
            <div className="quick-info-label">Insurance</div>
            <div className="quick-info-value">
              ROHINI Registered<small>Cashless via partners</small>
            </div>
          </div>
          <div className="quick-info-item">
            <div className="quick-info-icon">🅿</div>
            <div className="quick-info-label">Parking</div>
            <div className="quick-info-value">
              Free on-site<small>Two-wheeler &amp; car</small>
            </div>
          </div>
        </div>
      </section>

      {/* 4. LOCATION & MAP */}
      <section className="location">
        <div className="section-header">
          <div className="section-tag">Where To Find Us</div>
          <h2 className="section-title">
            Bapatwadi, Amravati. Just <em>beside Ahilya Mangal Karyalaya.</em>
          </h2>
          <p className="section-lede">
            A permanent purpose-built facility opened in June 2024. Easy to find, easy to reach, easy to park.
          </p>
        </div>

        <div className="location-grid">
          <div className="location-map">
            <div className="location-map-marker">
              <div className="location-map-pin"></div>
              <div className="location-map-label">Shri Manmukund Hospital</div>
            </div>
            <div className="location-map-cta">
              <a
                href="https://maps.google.com/?q=Shri+Manmukund+Hospital+Amravati"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-large"
              >
                Get Directions →
              </a>
            </div>
          </div>

          <div className="location-details">
            <div className="location-devanagari">श्री मनमुकुंद रुग्णालय</div>
            <h3 className="location-name">Shri Manmukund Hospital</h3>
            <p className="location-address">
              Plot No. 7, Bapatwadi<br />
              Vivekanand Colony to Radient Hospital Road<br />
              Amravati 444604, Maharashtra
            </p>

            <div className="location-landmarks-label">Nearby Landmarks</div>
            <ul className="location-landmarks">
              <li>
                <strong>Beside Ahilya Mangal Karyalaya</strong> — right next door, the most reliable landmark
              </li>
              <li>
                <strong>Radient Hospital</strong> — approximately 100 metres away
              </li>
              <li>Vivekanand Colony area — well known to auto drivers in Amravati</li>
              <li>10 minutes from Amravati Bus Stand</li>
              <li>15 minutes from Amravati Railway Station</li>
            </ul>

            <div className="location-actions">
              <a
                href="https://maps.google.com/?q=Shri+Manmukund+Hospital+Amravati"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Open in Google Maps
              </a>
              <a href="tel:+918208927917" className="btn btn-ghost">
                Call for directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. OPD TIMINGS */}
      <section className="timings">
        <div className="timings-inner">
          <div className="section-header">
            <div className="section-tag">OPD Timings</div>
            <h2 className="section-title">
              Consulting hours for <em>both doctors.</em>
            </h2>
            <p className="section-lede">
              Six days a week, with two sessions daily. Sunday consultations by prior appointment only. Emergencies handled round the clock.
            </p>
          </div>

          <div className="timings-grid">
            <div className="timings-card">
              <div className="timings-card-head">
                <div className="timings-card-icon">V</div>
                <div className="timings-card-title-group">
                  <h3>Dr. Vipin Tongale</h3>
                  <span>General Surgeon &amp; Proctologist</span>
                </div>
              </div>
              <div className="timings-row">
                <div className="timings-day">Mon – Sat</div>
                <div className="timings-time">
                  1:00 – 4:30 PM<small>Afternoon consultation</small>
                </div>
              </div>
              <div className="timings-row">
                <div className="timings-day">Mon – Sat</div>
                <div className="timings-time">
                  6:00 – 8:30 PM<small>Evening consultation</small>
                </div>
              </div>
              <div className="timings-row">
                <div className="timings-day">Sunday</div>
                <div className="timings-time timings-time--closed">
                  By prior appointment only
                </div>
              </div>
              <div className="timings-row">
                <div className="timings-day">Emergency</div>
                <div className="timings-time">
                  Available 24 hours<small>Call 9405404492</small>
                </div>
              </div>
            </div>

            <div className="timings-card timings-card--swati">
              <div className="timings-card-head">
                <div className="timings-card-icon">S</div>
                <div className="timings-card-title-group">
                  <h3>Dr. Swati Tongale</h3>
                  <span>Female Care Unit &amp; Proctology</span>
                </div>
              </div>
              <div className="timings-row">
                <div className="timings-day">Mon – Sat</div>
                <div className="timings-time">
                  2:30 – 4:30 PM<small>Afternoon consultation</small>
                </div>
              </div>
              <div className="timings-row">
                <div className="timings-day">Mon – Sat</div>
                <div className="timings-time">
                  6:00 – 8:00 PM<small>Evening consultation</small>
                </div>
              </div>
              <div className="timings-row">
                <div className="timings-day">Sunday</div>
                <div className="timings-time timings-time--closed">Closed</div>
              </div>
              <div className="timings-row">
                <div className="timings-day">Booking</div>
                <div className="timings-time">
                  Call 8208927917<small>To book with Dr. Swati specifically</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BOOKING FORM */}
      <section className="booking" id="book">
        <div className="section-header--left">
          <div className="section-tag">Book Online</div>
          <h2 className="section-title">
            Or send us a <em>booking request.</em>
          </h2>
          <p className="section-lede">
            Prefer to book online instead of calling? Fill in the details below and we will call you back within 4 working hours to confirm your appointment.
          </p>
        </div>

        <div className="booking-grid">
          <div className="booking-info">
            <h3>
              Before your <em>consultation.</em>
            </h3>
            <p>To help us prepare and make your visit efficient, please have the following ready:</p>
            <ul>
              <li>
                <strong>Any previous prescriptions</strong> relating to your current concern
              </li>
              <li>
                <strong>Imaging reports</strong> — X-ray, ultrasound, MRI, or colonoscopy if available
              </li>
              <li>
                <strong>Recent blood tests</strong> including HbA1c if you are diabetic
              </li>
              <li>
                <strong>List of current medications</strong> with doses and duration
              </li>
              <li>
                <strong>Aadhaar or valid ID</strong> for hospital registration
              </li>
              <li>
                <strong>Insurance card</strong> or corporate coverage details, if applicable
              </li>
              <li>
                <strong>A companion</strong> if you are travelling from a long distance
              </li>
            </ul>
            <p>
              If you are calling from outside Amravati, please tell us when booking. We will schedule your consultation and any necessary procedures on the same day to save you a return trip.
            </p>
          </div>

          <div className="booking-form-wrap">
            <AppointmentEnquiryForm />
          </div>
        </div>
      </section>

      {/* 7. TRANSPORT / GETTING HERE */}
      <section className="transport">
        <div className="transport-inner">
          <div className="section-header">
            <div className="section-tag">Getting Here</div>
            <h2 className="section-title">
              Whether you drive, take an auto, <em>or arrive by train.</em>
            </h2>
            <p className="section-lede">
              Amravati is well connected to the rest of Vidarbha and Maharashtra. Here is how to reach us from the main arrival points.
            </p>
          </div>

          <div className="transport-grid">
            <div className="transport-card">
              <div className="transport-icon">🚂</div>
              <h3 className="transport-title">From Amravati Railway Station</h3>
              <p className="transport-desc">
                Auto rickshaw or cab available directly outside. Ask for Bapatwadi, Vivekanand Colony to Radient Hospital road. Most auto drivers recognise Ahilya Mangal Karyalaya as the landmark.
              </p>
              <div className="transport-distance">Approximately 15 minutes · 6 km</div>
            </div>

            <div className="transport-card">
              <div className="transport-icon">🚌</div>
              <h3 className="transport-title">From Amravati Bus Stand</h3>
              <p className="transport-desc">
                Shared auto and private auto both easily available. The Vivekanand Colony route is a well-known stop. If travelling by MSRTC, buses to Amravati arrive from Nagpur, Aurangabad, Pune, and Mumbai daily.
              </p>
              <div className="transport-distance">Approximately 10 minutes · 4 km</div>
            </div>

            <div className="transport-card">
              <div className="transport-icon">🚗</div>
              <h3 className="transport-title">By Car (own or hired)</h3>
              <p className="transport-desc">
                Free on-site parking for cars and two-wheelers. Enter via Vivekanand Colony road and continue toward Radient Hospital. The hospital is right beside Ahilya Mangal Karyalaya with clear signage.
              </p>
              <div className="transport-distance">GPS: Plot 7, Bapatwadi, 444604</div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. BEFORE YOUR VISIT FAQ */}
      <section className="visit-faq">
        <div className="section-header">
          <div className="section-tag">Practical Questions</div>
          <h2 className="section-title">
            Before your <em>first visit.</em>
          </h2>
        </div>

        <div className="visit-faq-list">
          <details className="visit-faq-item">
            <summary className="visit-faq-question">
              Do I need an appointment, or can I walk in?
            </summary>
            <div className="visit-faq-answer">
              <p>
                <strong>Both are possible, but appointments are strongly preferred.</strong> Walk-ins are seen in the order they arrive after scheduled appointments, which can mean a wait of 1 to 2 hours during busy periods. Booking ahead lets us allocate proper consultation time to your case.
              </p>
            </div>
          </details>

          <details className="visit-faq-item">
            <summary className="visit-faq-question">
              How long does a first consultation take?
            </summary>
            <div className="visit-faq-answer">
              <p>
                A first consultation typically takes <strong>30 to 45 minutes</strong>. This includes taking your history, examination, discussion of findings, and initial treatment planning. Please arrive 10 minutes early for hospital registration on your first visit.
              </p>
            </div>
          </details>

          <details className="visit-faq-item">
            <summary className="visit-faq-question">
              What forms of payment do you accept?
            </summary>
            <div className="visit-faq-answer">
              <p>
                We accept <strong>cash, UPI (all apps including Google Pay, PhonePe, Paytm), net banking, and bank transfer</strong>. We do not currently have a card swipe machine on-site, so please plan payment accordingly. Cashless treatment is available through our partner insurance providers.
              </p>
            </div>
          </details>

          <details className="visit-faq-item">
            <summary className="visit-faq-question">
              Is insurance accepted? Which insurance companies?
            </summary>
            <div className="visit-faq-answer">
              <p>
                Yes, we are <strong>ROHINI registered</strong> and provide cashless treatment through several partner insurance providers. Direct hospital empanelment is currently under process. For insurance-specific enquiries, please call our team at 8208927917 with your policy details, and we will confirm coverage before your visit.
              </p>
            </div>
          </details>

          <details className="visit-faq-item">
            <summary className="visit-faq-question">
              Can a family member accompany me during consultation?
            </summary>
            <div className="visit-faq-answer">
              <p>
                <strong>Absolutely, and we encourage it</strong>, especially for elderly patients, those travelling long distances, or anyone anxious about the visit. For sensitive examinations, particularly for female patients seen by Dr. Swati, a female companion is welcome throughout. Our examination rooms are private and dignified.
              </p>
            </div>
          </details>

          <details className="visit-faq-item">
            <summary className="visit-faq-question">
              Can I book a phone consultation instead?
            </summary>
            <div className="visit-faq-answer">
              <p>
                For initial queries and follow-up questions, yes. Call 8208927917 and our team will schedule a brief phone consultation. However, <strong>a proper physical examination is essential for any anorectal or surgical concern</strong>. Phone consultations cannot substitute for in-person evaluation when a diagnosis or treatment plan needs to be made.
              </p>
            </div>
          </details>

          <details className="visit-faq-item">
            <summary className="visit-faq-question">
              I am travelling from outside Amravati. Can procedures be done the same day as consultation?
            </summary>
            <div className="visit-faq-answer">
              <p>
                Often yes, if the case is straightforward. Please <strong>call ahead when booking</strong> and mention you are travelling from outside. We will:
              </p>
              <p>
                Reserve consultation time first thing in your session; arrange any pre-procedure investigations at the earliest slot; schedule the procedure the same day if clinically appropriate; and coordinate discharge and follow-up planning to save you a return trip.
              </p>
            </div>
          </details>
        </div>
      </section>
    </main>
  );
}

