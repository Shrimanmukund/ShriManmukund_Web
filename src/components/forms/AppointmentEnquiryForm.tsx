'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import type { AppointmentEnquiryInput } from '@/types/forms';

export interface AppointmentEnquiryFormProps {
  initialDoctorSlug?: string;
  defaultDoctor?: string;
  initialServiceSlug?: string;
  defaultService?: string;
  initialConditionSlug?: string;
  title?: string;
  subtitle?: string;
}

export const AppointmentEnquiryForm: React.FC<AppointmentEnquiryFormProps> = ({
  initialDoctorSlug,
  defaultDoctor,
  title = 'Request an appointment',
  subtitle = 'We will call to confirm within 4 working hours.',
}) => {
  const initialDoctor =
    initialDoctorSlug === 'dr-vipin' || defaultDoctor === 'dr-vipin'
      ? 'Dr. Vipin Tongale'
      : initialDoctorSlug === 'dr-swati' || defaultDoctor === 'dr-swati'
      ? 'Dr. Swati Tongale'
      : 'No preference — first available';

  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [whichDoctor, setWhichDoctor] = useState(initialDoctor);
  const [reasonForVisit, setReasonForVisit] = useState('Please select a concern');
  const [briefDescription, setBriefDescription] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredSession, setPreferredSession] = useState('Afternoon (1:00 – 4:30)');
  const [acknowledged, setAcknowledged] = useState(false);
  const [honeypot, setHoneypot] = useState('');

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) {
      setStatus('success');
      return;
    }

    if (!fullName.trim() || !phone.trim()) {
      setStatus('error');
      setErrorMessage('Please provide your full name and phone number.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    const payload: AppointmentEnquiryInput = {
      patientName: fullName,
      age,
      phone,
      email,
      doctorSlug:
        whichDoctor === 'Dr. Vipin Tongale'
          ? 'dr-vipin'
          : whichDoctor === 'Dr. Swati Tongale'
          ? 'dr-swati'
          : '',
      reasonForVisit,
      message: briefDescription,
      preferredDate,
      preferredTimeSlot: preferredSession,
    };

    try {
      const res = await fetch('/api/enquiry/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Failed to submit booking request.');
      }

      setStatus('success');
      setFullName('');
      setAge('');
      setPhone('');
      setEmail('');
      setBriefDescription('');
      setPreferredDate('');
      setAcknowledged(false);
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'An error occurred while submitting your enquiry. Please call 8208927917.');
    }
  };

  if (status === 'success') {
    return (
      <div className="booking-form" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
        <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--sage-lighter)', color: 'var(--sage)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontSize: '1.5rem', fontWeight: 600 }}>✓</div>
        <h3 className="booking-form-title">Booking Request Received</h3>
        <p className="booking-form-subtitle" style={{ marginBottom: '1.5rem' }}>
          Thank you. Our reception coordinator will call you within 4 working hours at <strong>{phone || 'the number provided'}</strong> to confirm your slot.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="btn btn-ghost"
          style={{ fontSize: '0.875rem' }}
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h3 className="booking-form-title">{title}</h3>
      <p className="booking-form-subtitle">{subtitle}</p>

      {/* Honeypot */}
      <input
        type="text"
        name="website_trap"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
      />

      {status === 'error' && (
        <div style={{ padding: '0.75rem 1rem', background: '#FEE2E2', border: '1px solid #B91C1C', color: '#B91C1C', borderRadius: '8px', marginBottom: '1.25rem', fontSize: '0.875rem' }}>
          {errorMessage}
        </div>
      )}

      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Full name</label>
          <input
            type="text"
            className="form-input"
            placeholder="Your name"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Age</label>
          <input
            type="text"
            className="form-input"
            placeholder="Years"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Phone (WhatsApp)</label>
          <input
            type="tel"
            className="form-input"
            placeholder="10-digit number"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="form-label">Email (optional)</label>
          <input
            type="email"
            className="form-input"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>

      <div className="form-group">
        <label className="form-label">Which doctor?</label>
        <select
          className="form-select"
          value={whichDoctor}
          onChange={(e) => setWhichDoctor(e.target.value)}
        >
          <option>No preference — first available</option>
          <option>Dr. Vipin Tongale</option>
          <option>Dr. Swati Tongale</option>
        </select>
      </div>

      <div className="form-group">
        <label className="form-label">Reason for visit</label>
        <select
          className="form-select"
          value={reasonForVisit}
          onChange={(e) => setReasonForVisit(e.target.value)}
        >
          <option>Please select a concern</option>
          <option>Piles / Haemorrhoids</option>
          <option>Anal Fissure</option>
          <option>Anal Fistula</option>
          <option>Hernia / Hydrocele</option>
          <option>Female Care Concern</option>
          <option>Fertility (Uttarbasti)</option>
          <option>Panchakarma / Ayurvedic Care</option>
          <option>Second Opinion</option>
          <option>Other — will describe below</option>
        </select>
      </div>

      <div className="form-group">
        <label className="form-label">Brief description (optional)</label>
        <textarea
          className="form-textarea"
          placeholder="Tell us briefly what you are experiencing, so we can prepare for your visit"
          value={briefDescription}
          onChange={(e) => setBriefDescription(e.target.value)}
        ></textarea>
      </div>

      <div className="form-group">
        <label className="form-label">Preferred date &amp; session</label>
        <div className="form-row">
          <input
            type="date"
            className="form-input"
            value={preferredDate}
            onChange={(e) => setPreferredDate(e.target.value)}
          />
          <select
            className="form-select"
            value={preferredSession}
            onChange={(e) => setPreferredSession(e.target.value)}
          >
            <option>Afternoon (1:00 – 4:30)</option>
            <option>Evening (6:00 – 8:30)</option>
            <option>Either is fine</option>
          </select>
        </div>
      </div>

      <label className="form-checkbox">
        <input
          type="checkbox"
          checked={acknowledged}
          onChange={(e) => setAcknowledged(e.target.checked)}
        />
        I understand this is a booking request, not a confirmed appointment.
      </label>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn btn-primary btn-large btn-block"
        style={{ marginTop: '1rem', width: '100%', justifyContent: 'center' }}
      >
        {status === 'submitting' ? 'Submitting request...' : 'Request appointment'}
      </button>

      <p className="form-note">
        By submitting, you agree to be contacted at the number provided. We will never share your details with third parties. Please read our{' '}
        <Link href="/legal/privacy-policy/" style={{ color: 'var(--sage)', borderBottom: '1px solid var(--sage-soft)' }}>
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  );
};
