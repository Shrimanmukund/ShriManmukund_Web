import React from 'react';
import Link from 'next/link';

export interface LegalTocItem {
  id: string;
  num: string;
  title: string;
}

export interface LegalGrievanceData {
  eyebrow: string;
  title: string;
  titleEm: string;
  desc: string;
  officer: string;
  officerRole: string;
  email: string;
  phone: string;
  address: string;
}

export interface LegalDocumentData {
  slug: string;
  title: string;
  titleEm: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  deck: string;
  effectiveDate: string;
  lastUpdated: string;
  version: string;
  jurisdiction: string;
  icon: string;
  toc: LegalTocItem[];
  renderBody: () => React.ReactNode;
  grievance: LegalGrievanceData;
}

export const LEGAL_DOCUMENTS: Record<string, LegalDocumentData> = {
  'privacy-policy': {
    slug: 'privacy-policy',
    title: 'Privacy',
    titleEm: 'Policy',
    metaTitle: 'Privacy Policy — Shri Manmukund Hospital, Amravati',
    metaDescription: 'How Shri Manmukund Hospital collects, uses, protects, and respects the personal and medical information of patients and visitors.',
    eyebrow: 'Legal Document',
    deck: 'How Shri Manmukund Hospital collects, uses, protects, and respects the personal and medical information of patients and visitors.',
    effectiveDate: '15 September 2026',
    lastUpdated: '15 September 2026',
    version: '1.0',
    jurisdiction: 'India · Maharashtra',
    icon: '🔒',
    toc: [
      { id: 'sec-01', num: '01', title: 'Introduction and scope' },
      { id: 'sec-02', num: '02', title: 'Definitions' },
      { id: 'sec-03', num: '03', title: 'Information we collect' },
      { id: 'sec-04', num: '04', title: 'How we use your information' },
      { id: 'sec-05', num: '05', title: 'How we share your information' },
      { id: 'sec-06', num: '06', title: 'Data security and retention' },
      { id: 'sec-07', num: '07', title: 'Your rights under the DPDP Act' },
      { id: 'sec-08', num: '08', title: 'Cookies and tracking' },
      { id: 'sec-09', num: '09', title: "Children's privacy" },
      { id: 'sec-10', num: '10', title: 'Third party links and services' },
      { id: 'sec-11', num: '11', title: 'Changes to this policy' },
      { id: 'sec-12', num: '12', title: 'Contact and grievance officer' },
    ],
    renderBody: () => (
      <>
        <h2 id="sec-01">
          <span className="h2-num">01</span> Introduction and scope
        </h2>
        <p>
          Shri Manmukund Hospital (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;, or &ldquo;the hospital&rdquo;) is a specialist proctology and integrated Ayurvedic surgical hospital located at Plot No. 7, Bapatwadi, Amravati 444604, Maharashtra, India. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal and medical information when you visit our facility, use our website, or interact with us through any other means.
        </p>
        <p>
          We take your privacy seriously, particularly given the sensitive nature of medical information. This policy has been prepared in accordance with the <strong>Digital Personal Data Protection Act, 2023</strong> (&ldquo;DPDP Act&rdquo;), the <strong>Information Technology Act, 2000</strong>, and applicable rules governing the storage and processing of medical records in India.
        </p>
        <p>
          By accessing our website, booking a consultation, or receiving care at our hospital, you consent to the practices described in this Privacy Policy. If you do not agree with any part of this policy, please do not use our services.
        </p>

        <h2 id="sec-02">
          <span className="h2-num">02</span> Definitions
        </h2>
        <p>For the purposes of this Privacy Policy, the following terms have the meanings set out below:</p>

        <div className="definition">
          <div className="definition-term">Personal Data</div>
          <div className="definition-meaning">
            Any information that identifies or can be used to identify you, including name, contact details, date of birth, gender, address, and identity proof details.
          </div>
        </div>

        <div className="definition">
          <div className="definition-term">Medical Data</div>
          <div className="definition-meaning">
            Sensitive health-related information collected in connection with your care, including medical history, symptoms, examination findings, diagnostic results, imaging, treatment plans, prescriptions, and clinical notes.
          </div>
        </div>

        <div className="definition">
          <div className="definition-term">Processing</div>
          <div className="definition-meaning">
            Any operation performed on personal or medical data, including collection, recording, organisation, storage, adaptation, retrieval, consultation, use, disclosure, or deletion.
          </div>
        </div>

        <div className="definition">
          <div className="definition-term">Data Fiduciary</div>
          <div className="definition-meaning">
            The person or entity that determines the purpose and means of processing personal data. Under this policy, Shri Manmukund Hospital acts as the Data Fiduciary for your personal and medical data.
          </div>
        </div>

        <h2 id="sec-03">
          <span className="h2-num">03</span> Information we collect
        </h2>

        <h3>3.1 Personal information you provide</h3>
        <p>When you book a consultation, register at the hospital, or submit an enquiry through our website, we collect information you voluntarily provide, including:</p>
        <ul>
          <li>Full name, age, gender, and date of birth</li>
          <li>Contact details including phone number, email address, and residential address</li>
          <li>Identity proof (Aadhaar number, PAN, or other government ID) for hospital registration</li>
          <li>Emergency contact details of a family member or guardian</li>
          <li>Insurance details, if you wish to avail cashless treatment through partner insurers</li>
          <li>Preferred consulting doctor and reason for visit</li>
        </ul>

        <h3>3.2 Medical information</h3>
        <p>In the course of providing medical care, we collect and record:</p>
        <ul>
          <li>Chief complaints, symptoms, and history of present illness</li>
          <li>Past medical, surgical, and family history</li>
          <li>Physical examination findings</li>
          <li>Laboratory reports, imaging (X-ray, ultrasound, MRI, CT scans), and other diagnostic results</li>
          <li>Diagnosis, treatment plan, procedure notes, and prescriptions</li>
          <li>Follow-up records, recovery notes, and outcome documentation</li>
          <li>Photographs or videos of clinical findings, taken only with your explicit written consent</li>
        </ul>

        <h3>3.3 Automatically collected information</h3>
        <p>When you visit our website, we automatically collect certain technical information, including:</p>
        <ul>
          <li>IP address and approximate geographic location</li>
          <li>Browser type and version, device type, and operating system</li>
          <li>Pages you visit, time spent on each page, and referring URLs</li>
          <li>Cookies and similar tracking technologies (see Section 08)</li>
        </ul>

        <h2 id="sec-04">
          <span className="h2-num">04</span> How we use your information
        </h2>
        <p>We use your personal and medical information for the following purposes:</p>

        <h4>Providing medical care</h4>
        <p>Consultation, diagnosis, treatment planning, procedure delivery, post-procedure follow-up, and coordination with visiting specialists or referring physicians.</p>

        <h4>Communication with you</h4>
        <p>Appointment confirmations, reminders, follow-up scheduling, sharing of reports and prescriptions, and responding to your enquiries.</p>

        <h4>Hospital administration</h4>
        <p>Registration, billing, insurance processing, medical record maintenance, and internal quality improvement.</p>

        <h4>Legal and regulatory compliance</h4>
        <p>Meeting our obligations under the Clinical Establishments Act, National Medical Commission regulations, ASCI guidelines, DMR Act, ROHINI system requirements, and other applicable laws.</p>

        <h4>Research and clinical audit</h4>
        <p>With your explicit consent, anonymised clinical data may be used for research, case series documentation, teaching, and quality improvement. No individually identifiable information is disclosed in such use.</p>

        <h2 id="sec-05">
          <span className="h2-num">05</span> How we share your information
        </h2>
        <p>We do not sell, rent, or trade your personal or medical information. We share your information only in the following circumstances:</p>

        <h3>5.1 With your explicit consent</h3>
        <p>When you request or authorise sharing of records with another doctor, hospital, family member, or insurance provider, we release the requested information as specified by you in writing.</p>

        <h3>5.2 With healthcare partners</h3>
        <ul>
          <li><strong>Visiting specialists</strong> at our hospital who participate in your care (for example, laparoscopic surgeons for gall bladder or hernia procedures)</li>
          <li><strong>Referring physicians</strong> who sent you to us, in the form of consultation notes and treatment summaries</li>
          <li><strong>Diagnostic laboratories</strong> for processing blood tests, biopsies, or imaging</li>
          <li><strong>Insurance providers</strong> for cashless treatment processing, only with your consent</li>
        </ul>

        <h3>5.3 Legal and regulatory requirements</h3>
        <p>We may disclose your information when required by law, including:</p>
        <ul>
          <li>Court orders, subpoenas, or lawful government requests</li>
          <li>Notifiable disease reporting under public health law</li>
          <li>Medico-legal cases where such reporting is mandatory</li>
          <li>Investigation of insurance fraud or other regulatory enquiries</li>
        </ul>

        <div className="legal-panel">
          <div className="legal-panel-title">A note on confidentiality</div>
          <div className="legal-panel-body">
            <p>
              Doctor-patient confidentiality is a cornerstone of medical practice. We treat all information you share with us as strictly confidential and will not disclose it to any party without a lawful basis or your explicit consent. This applies equally to Dr. Vipin Tongale, Dr. Swati Tongale, and every member of our clinical, administrative, and support staff.
            </p>
          </div>
        </div>

        <h2 id="sec-06">
          <span className="h2-num">06</span> Data security and retention
        </h2>

        <h3>6.1 Security measures</h3>
        <p>We implement reasonable technical, physical, and administrative safeguards to protect your data, including:</p>
        <ul>
          <li>Access-controlled electronic medical record systems</li>
          <li>Physical security of paper records in locked storage</li>
          <li>Staff training on confidentiality and data protection</li>
          <li>Encryption of data during transmission where technically feasible</li>
          <li>Regular backups to prevent data loss</li>
        </ul>
        <p>
          Despite our best efforts, no method of transmission over the internet or method of electronic storage is 100 percent secure. We cannot guarantee absolute security, but we work to keep our practices aligned with prevailing standards for Indian medical institutions.
        </p>

        <h3>6.2 How long we keep your data</h3>
        <p>
          We retain your medical records for the periods required by law, which for most records is a <strong>minimum of five years from the date of last consultation or procedure</strong>. Some records, particularly those relating to surgical procedures or ongoing conditions, are retained for longer periods as prescribed by medical record regulations.
        </p>
        <p>
          Personal information collected through our website is retained only for as long as necessary to fulfil the purpose for which it was collected, unless a longer retention period is required by law.
        </p>

        <h2 id="sec-07">
          <span className="h2-num">07</span> Your rights under the DPDP Act
        </h2>
        <p>Under the Digital Personal Data Protection Act, 2023, you have the following rights regarding your personal data:</p>

        <ol>
          <li><strong>Right to access:</strong> You can request a summary of the personal data we hold about you and how it has been processed.</li>
          <li><strong>Right to correction:</strong> You can request correction of any inaccurate or incomplete personal data.</li>
          <li><strong>Right to erasure:</strong> You can request deletion of your personal data, subject to legal retention requirements for medical records.</li>
          <li><strong>Right to withdraw consent:</strong> You can withdraw your consent to the processing of your data at any time, though this may affect our ability to continue providing care.</li>
          <li><strong>Right to grievance redressal:</strong> You can raise concerns about how your data is handled with our Grievance Officer (see Section 12).</li>
          <li><strong>Right to nominate:</strong> You may nominate another individual to exercise your rights in the event of your death or incapacity.</li>
        </ol>
        <p>
          To exercise any of these rights, please contact us at the details provided in Section 12. We will respond to your request within the timeframes required by applicable law.
        </p>

        <h2 id="sec-08">
          <span className="h2-num">08</span> Cookies and tracking
        </h2>
        <p>Our website uses cookies and similar technologies to improve your browsing experience, analyse website performance, and understand how visitors use our content. We use:</p>
        <ul>
          <li><strong>Essential cookies</strong> that are necessary for the website to function properly</li>
          <li><strong>Analytics cookies</strong> to understand traffic patterns and improve our content</li>
          <li><strong>Preference cookies</strong> to remember your language or display settings</li>
        </ul>
        <p>
          You can control or disable cookies through your browser settings. Please note that disabling essential cookies may prevent some features of the website from working. For more detail, see our{' '}
          <Link href="/legal/cookie-policy/">Cookie Policy</Link>.
        </p>

        <h2 id="sec-09">
          <span className="h2-num">09</span> Children&apos;s privacy
        </h2>
        <p>
          Our website is not directed at children under the age of 18, and we do not knowingly collect personal information from minors through the website. Medical care for children is delivered in the presence of a parent or legal guardian, who provides all necessary consents for the child&apos;s registration and treatment.
        </p>

        <h2 id="sec-10">
          <span className="h2-num">10</span> Third party links and services
        </h2>
        <p>
          Our website may contain links to third-party websites (for example, insurance providers, government health portals, or professional bodies). We are not responsible for the privacy practices or content of those websites. We encourage you to read the privacy policies of any third-party website you visit.
        </p>
        <p>
          If we use third-party services on our website (such as Google Maps for location, or analytics providers), those services may collect information in accordance with their own privacy policies. We select such providers with reasonable care.
        </p>

        <h2 id="sec-11">
          <span className="h2-num">11</span> Changes to this policy
        </h2>
        <p>We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or for other operational reasons. When we make material changes, we will:</p>
        <ul>
          <li>Update the &ldquo;Last Updated&rdquo; date at the top of this policy</li>
          <li>Post a notice on our website homepage for at least 30 days</li>
          <li>Notify patients directly, where practical, if the change materially affects how their medical information is handled</li>
        </ul>
        <p>We encourage you to review this policy periodically to stay informed about how we protect your information.</p>

        <h2 id="sec-12">
          <span className="h2-num">12</span> Contact and grievance officer
        </h2>
        <p>
          If you have any questions, concerns, or complaints about this Privacy Policy or the way we handle your personal information, please contact us using the details below. We will respond as quickly as possible, and always within 30 days of receiving your enquiry.
        </p>
      </>
    ),
    grievance: {
      eyebrow: 'Grievance Redressal',
      title: 'Questions about',
      titleEm: 'your data?',
      desc: 'Reach out to our designated Grievance Officer for any privacy-related concerns or requests to exercise your rights under the DPDP Act.',
      officer: 'Dr. Vipin Tongale',
      officerRole: 'Co-founder & Chief Consultant',
      email: 'privacy@shrimanmukund.in',
      phone: '+91 82089 27917',
      address: 'Shri Manmukund Hospital, Plot No. 7, Bapatwadi, Amravati 444604, Maharashtra, India',
    },
  },

  'terms-of-use': {
    slug: 'terms-of-use',
    title: 'Terms of',
    titleEm: 'Use',
    metaTitle: 'Terms of Use — Shri Manmukund Hospital, Amravati',
    metaDescription: 'Terms of Use governing your use of the Shri Manmukund Hospital website and digital healthcare information services.',
    eyebrow: 'Legal Document',
    deck: 'Terms and conditions governing the access, browsing, and use of the Shri Manmukund Hospital website and digital services.',
    effectiveDate: '15 September 2026',
    lastUpdated: '15 September 2026',
    version: '1.0',
    jurisdiction: 'India · Maharashtra',
    icon: '§',
    toc: [
      { id: 'sec-01', num: '01', title: 'Acceptance of terms' },
      { id: 'sec-02', num: '02', title: 'Definitions and scope' },
      { id: 'sec-03', num: '03', title: 'Use of the website' },
      { id: 'sec-04', num: '04', title: 'Intellectual property rights' },
      { id: 'sec-05', num: '05', title: 'Medical content disclaimer' },
      { id: 'sec-06', num: '06', title: 'No doctor-patient relationship' },
      { id: 'sec-07', num: '07', title: 'Appointment requests and communication' },
      { id: 'sec-08', num: '08', title: 'Third-party links and services' },
      { id: 'sec-09', num: '09', title: 'Disclaimer of warranties' },
      { id: 'sec-10', num: '10', title: 'Limitation of liability' },
      { id: 'sec-11', num: '11', title: 'Indemnification' },
      { id: 'sec-12', num: '12', title: 'Governing law and jurisdiction' },
    ],
    renderBody: () => (
      <>
        <h2 id="sec-01">
          <span className="h2-num">01</span> Acceptance of terms
        </h2>
        <p>
          Welcome to the official website of Shri Manmukund Hospital (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), located at{' '}
          <strong>www.shrimanmukund.com</strong>. By accessing, browsing, or using this website, you agree to comply with and be bound by these Terms of Use, along with our{' '}
          <Link href="/legal/privacy-policy/">Privacy Policy</Link> and <Link href="/legal/medical-disclaimer/">Medical Disclaimer</Link>.
        </p>
        <p>
          If you do not agree with any part of these terms, you must immediately discontinue using our website and digital services.
        </p>

        <h2 id="sec-02">
          <span className="h2-num">02</span> Definitions and scope
        </h2>
        <p>For the purposes of these Terms of Use:</p>

        <div className="definition">
          <div className="definition-term">Website</div>
          <div className="definition-meaning">
            The digital platform, web pages, medical articles, surgical guides, booking interfaces, and multimedia content hosted under the domain shrimanmukund.com.
          </div>
        </div>

        <div className="definition">
          <div className="definition-term">User / You</div>
          <div className="definition-meaning">
            Any individual who accesses, views, or interacts with the website, whether as a patient, prospective patient, caregiver, or general visitor.
          </div>
        </div>

        <div className="definition">
          <div className="definition-term">Hospital Services</div>
          <div className="definition-meaning">
            In-person surgical, proctological, Ayurvedic, and clinical care delivered on-site at Shri Manmukund Hospital, Bapatwadi, Amravati.
          </div>
        </div>

        <h2 id="sec-03">
          <span className="h2-num">03</span> Use of the website
        </h2>
        <p>
          You agree to use this website solely for lawful purposes and in accordance with these Terms. You agree not to:
        </p>
        <ul>
          <li>Use the website in any manner that violates applicable local, state, national, or international laws.</li>
          <li>Attempt to gain unauthorized access to any portion of the website, server, or hospital administrative systems.</li>
          <li>Transmit any viruses, worms, malware, or destructive code.</li>
          <li>Scrape, crawl, or harvest content, doctor profiles, or patient materials without express written permission.</li>
          <li>Submit false, misleading, or fraudulent information through enquiry or appointment request forms.</li>
        </ul>

        <h2 id="sec-04">
          <span className="h2-num">04</span> Intellectual property rights
        </h2>
        <p>
          All content published on this website—including text, graphics, logos, images, illustrations, medical articles, surgical playbooks, audio/video clips, and brand marks—is the exclusive intellectual property of Shri Manmukund Hospital and its founders, Dr. Vipin Tongale and Dr. Swati Tongale, protected under Indian and international copyright laws.
        </p>
        <p>
          You may view, read, and share links to educational articles for personal, non-commercial purposes. Reproduction, modification, or commercial distribution of any text or media without prior written consent is strictly prohibited.
        </p>

        <h2 id="sec-05">
          <span className="h2-num">05</span> Medical content disclaimer
        </h2>
        <p>
          All medical, surgical, and Ayurvedic information on this website is provided strictly for educational and awareness purposes. It is not a substitute for clinical examination, diagnosis, or personalized medical advice. For full details, please consult our dedicated{' '}
          <Link href="/legal/medical-disclaimer/">Medical Disclaimer</Link>.
        </p>

        <h2 id="sec-06">
          <span className="h2-num">06</span> No doctor-patient relationship
        </h2>
        <div className="legal-panel">
          <div className="legal-panel-title">Statutory Legal Notice</div>
          <div className="legal-panel-body">
            <p>
              Browsing this website, submitting an online enquiry, or reading educational materials does <strong>not</strong> create a doctor-patient relationship between you and Dr. Vipin Tongale, Dr. Swati Tongale, or Shri Manmukund Hospital. Such a relationship is established only upon formal hospital registration and physical in-person consultation at our hospital facility.
            </p>
          </div>
        </div>

        <h2 id="sec-07">
          <span className="h2-num">07</span> Appointment requests and communication
        </h2>
        <p>
          Submitting an appointment request through our website does not guarantee an immediate or confirmed booking slot. All web bookings are subject to verification and telephone confirmation by our hospital reception team within standard working hours.
        </p>

        <h2 id="sec-08">
          <span className="h2-num">08</span> Third-party links and services
        </h2>
        <p>
          Our website may provide links to external websites (such as partner diagnostic centres, government health portals, or Google Maps). We do not control or endorse the content or policies of third-party platforms and assume no responsibility for them.
        </p>

        <h2 id="sec-09">
          <span className="h2-num">09</span> Disclaimer of warranties
        </h2>
        <p>
          This website is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without warranties of any kind, whether express or implied. While we strive to maintain accurate, up-to-date clinical guidance, we do not warrant that the website will be uninterrupted, error-free, or free from technical defects.
        </p>

        <h2 id="sec-10">
          <span className="h2-num">10</span> Limitation of liability
        </h2>
        <p>
          To the fullest extent permitted by Indian law, Shri Manmukund Hospital, its directors, doctors, and staff shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use of, or inability to use, the website or reliance upon any information provided herein.
        </p>

        <h2 id="sec-11">
          <span className="h2-num">11</span> Indemnification
        </h2>
        <p>
          You agree to indemnify, defend, and hold harmless Shri Manmukund Hospital, its founders, medical staff, and administrators from any claims, damages, liabilities, or legal expenses arising from your violation of these Terms of Use or misuse of this website.
        </p>

        <h2 id="sec-12">
          <span className="h2-num">12</span> Governing law and jurisdiction
        </h2>
        <p>
          These Terms of Use shall be governed by and construed in accordance with the laws of the Republic of India. Any legal disputes arising out of or in connection with this website shall be subject to the exclusive jurisdiction of the competent courts in <strong>Amravati, Maharashtra, India</strong>.
        </p>
      </>
    ),
    grievance: {
      eyebrow: 'Governance & Compliance',
      title: 'Questions about',
      titleEm: 'these terms?',
      desc: 'For inquiries regarding website terms of use, content licensing, or legal compliance, contact our administrative compliance desk.',
      officer: 'Hospital Administrator',
      officerRole: 'Governance & Compliance Desk',
      email: 'admin@shrimanmukund.in',
      phone: '+91 82089 27917',
      address: 'Shri Manmukund Hospital, Plot No. 7, Bapatwadi, Amravati 444604, Maharashtra, India',
    },
  },

  'medical-disclaimer': {
    slug: 'medical-disclaimer',
    title: 'Medical',
    titleEm: 'Disclaimer',
    metaTitle: 'Medical Disclaimer — Shri Manmukund Hospital, Amravati',
    metaDescription: 'Important clinical and statutory medical disclaimer regarding healthcare information, treatment descriptions, and surgical guidance.',
    eyebrow: 'Statutory Notice',
    deck: 'Important statutory and clinical disclaimer regarding health information, surgical descriptions, and educational content on this website.',
    effectiveDate: '15 September 2026',
    lastUpdated: '15 September 2026',
    version: '1.0',
    jurisdiction: 'India · Maharashtra',
    icon: '⚕',
    toc: [
      { id: 'sec-01', num: '01', title: 'General informational purpose' },
      { id: 'sec-02', num: '02', title: 'Not professional medical advice' },
      { id: 'sec-03', num: '03', title: 'No doctor-patient relationship' },
      { id: 'sec-04', num: '04', title: 'Individual clinical variation' },
      { id: 'sec-05', num: '05', title: 'Emergency situations & urgent care' },
      { id: 'sec-06', num: '06', title: 'Accuracy and clinical evolution' },
      { id: 'sec-07', num: '07', title: 'Treatment recommendations' },
      { id: 'sec-08', num: '08', title: 'Third-party research and citations' },
      { id: 'sec-09', num: '09', title: 'Compliance with medical advertising norms' },
      { id: 'sec-10', num: '10', title: 'Clinical enquiries and contacts' },
    ],
    renderBody: () => (
      <>
        <h2 id="sec-01">
          <span className="h2-num">01</span> General informational purpose
        </h2>
        <p>
          The content provided on <strong>www.shrimanmukund.com</strong>—including all medical articles, anatomical diagrams, surgical recovery playbooks, clinical FAQs, and condition overviews—is published exclusively for general informational and patient educational purposes.
        </p>

        <h2 id="sec-02">
          <span className="h2-num">02</span> Not professional medical advice
        </h2>
        <p>
          The information on this website is <strong>not intended to be, and must never be treated as, a substitute for professional medical diagnosis, clinical advice, or surgical recommendation</strong>.
        </p>
        <p>
          Always seek the direct guidance of a qualified medical practitioner or specialist surgeon regarding any health concern, symptoms, or prospective treatment. Never disregard professional medical advice or delay seeking physical examination because of something you have read on this website.
        </p>

        <h2 id="sec-03">
          <span className="h2-num">03</span> No doctor-patient relationship
        </h2>
        <p>
          Accessing, reading, or submitting queries via this website does not establish a doctor-patient relationship between you and Dr. Vipin Tongale, Dr. Swati Tongale, or any physician at Shri Manmukund Hospital. Such a relationship is created solely upon in-person consultation, physical examination, and hospital registration.
        </p>

        <h2 id="sec-04">
          <span className="h2-num">04</span> Individual clinical variation
        </h2>
        <p>
          Every human anatomy, health history, and clinical condition is unique. References to recovery timelines, treatment protocols (e.g., Ksharsutra therapy, laser proctology, laparoscopic surgery, or Panchakarma procedures), and outcomes describe typical clinical observations. <strong>Individual recovery and treatment outcomes will vary</strong> depending on disease severity, co-morbidities, patient compliance, and physiological factors. No guaranteed outcome or cure is represented or implied.
        </p>

        <h2 id="sec-05">
          <span className="h2-num">05</span> Emergency situations &amp; urgent care
        </h2>
        <div className="legal-panel">
          <div className="legal-panel-title">Emergency Advisory</div>
          <div className="legal-panel-body">
            <p>
              <strong>Do not use this website or online forms for acute medical emergencies.</strong> If you or someone you know is experiencing severe rectal haemorrhage, unbearable acute pain, high fever with pelvic swelling, or signs of surgical shock:
            </p>
            <ul>
              <li>Call our 24-hour emergency hospital line directly at <strong>+91 94054 04492</strong>.</li>
              <li>Or visit our emergency unit immediately at Plot No. 7, Bapatwadi, Amravati.</li>
              <li>Or dial national emergency services (<strong>108 / 112</strong>).</li>
            </ul>
          </div>
        </div>

        <h2 id="sec-06">
          <span className="h2-num">06</span> Accuracy and clinical evolution
        </h2>
        <p>
          While our medical editorial team strives to keep all medical content aligned with prevailing clinical evidence and established surgical guidelines, medical science continually evolves. Shri Manmukund Hospital does not warrant that all published materials reflect the very latest developments at every given moment.
        </p>

        <h2 id="sec-07">
          <span className="h2-num">07</span> Treatment recommendations
        </h2>
        <p>
          Descriptions of surgical procedures (such as Ksharsutra ligation, laser haemorrhoidoplasty, fistula corectomy, or laparoscopic hernioplasty) are provided to demystify treatments for patients. Appropriate treatment modalities can only be determined through physical proctological examination, digital rectal evaluation, and diagnostic imaging.
        </p>

        <h2 id="sec-08">
          <span className="h2-num">08</span> Third-party research and citations
        </h2>
        <p>
          Where clinical studies, ICMR research papers, or Ayurvedic classical texts (such as the Sushruta Samhita) are cited, they are provided for scholarly reference and transparent patient education.
        </p>

        <h2 id="sec-09">
          <span className="h2-num">09</span> Compliance with medical advertising norms
        </h2>
        <p>
          This website is designed and maintained in strict compliance with the <strong>National Medical Commission (NMC) Professional Conduct Regulations</strong>, the <strong>Drugs and Magic Remedies (Objectionable Advertisements) Act, 1954</strong>, and the <strong>Advertising Standards Council of India (ASCI)</strong> medical code. We do not publish patient testimonials with exaggerated claims, comparative superiority assertions, or before-and-after clinical imagery.
        </p>

        <h2 id="sec-10">
          <span className="h2-num">10</span> Clinical enquiries and contacts
        </h2>
        <p>
          If you have questions regarding the medical educational content on this website, or wish to schedule a consultation with our surgical team, please reach out using the official contact details below.
        </p>
      </>
    ),
    grievance: {
      eyebrow: 'Clinical Governance',
      title: 'Questions regarding',
      titleEm: 'clinical information?',
      desc: 'Contact our clinical governance desk for queries regarding medical articles, procedure explanations, or consultation bookings.',
      officer: 'Dr. Vipin Tongale',
      officerRole: 'Chief Surgeon & Medical Director',
      email: 'clinical@shrimanmukund.in',
      phone: '+91 82089 27917',
      address: 'Shri Manmukund Hospital, Plot No. 7, Bapatwadi, Amravati 444604, Maharashtra, India',
    },
  },

  'cookie-policy': {
    slug: 'cookie-policy',
    title: 'Cookie',
    titleEm: 'Policy',
    metaTitle: 'Cookie Policy — Shri Manmukund Hospital, Amravati',
    metaDescription: 'How Shri Manmukund Hospital uses cookies and tracking technologies to ensure optimal website performance and patient privacy.',
    eyebrow: 'Tracking & Privacy',
    deck: 'Information about how Shri Manmukund Hospital uses cookies and tracking technologies to ensure optimal website performance and user experience.',
    effectiveDate: '15 September 2026',
    lastUpdated: '15 September 2026',
    version: '1.0',
    jurisdiction: 'India · Maharashtra',
    icon: '⌘',
    toc: [
      { id: 'sec-01', num: '01', title: 'What are cookies' },
      { id: 'sec-02', num: '02', title: 'Why we use cookies' },
      { id: 'sec-03', num: '03', title: 'Types of cookies we use' },
      { id: 'sec-04', num: '04', title: 'Essential technical cookies' },
      { id: 'sec-05', num: '05', title: 'Analytics and traffic measurement' },
      { id: 'sec-06', num: '06', title: 'Preference cookies' },
      { id: 'sec-07', num: '07', title: 'Third-party embeds' },
      { id: 'sec-08', num: '08', title: 'Controlling and disabling cookies' },
      { id: 'sec-09', num: '09', title: 'Browser-specific instructions' },
      { id: 'sec-10', num: '10', title: 'Policy updates' },
      { id: 'sec-11', num: '11', title: 'Contact and questions' },
    ],
    renderBody: () => (
      <>
        <h2 id="sec-01">
          <span className="h2-num">01</span> What are cookies
        </h2>
        <p>
          Cookies are small text files that are stored on your computer, smartphone, or tablet when you visit a website. They allow websites to remember user actions, load preferences, ensure secure browsing, and analyse website performance.
        </p>

        <h2 id="sec-02">
          <span className="h2-num">02</span> Why we use cookies
        </h2>
        <p>
          Shri Manmukund Hospital uses cookies to ensure our digital hospital portal operates smoothly, allows quick appointment enquiry submission, renders interactive location maps, and helps us understand which medical guides are most helpful to patients.
        </p>

        <h2 id="sec-03">
          <span className="h2-num">03</span> Types of cookies we use
        </h2>
        <p>We classify the cookies utilized on our website into the following categories:</p>

        <div className="definition">
          <div className="definition-term">Essential Cookies</div>
          <div className="definition-meaning">
            Necessary for fundamental website operations, security token verification, and secure form submissions. These cannot be disabled without impairing website functionality.
          </div>
        </div>

        <div className="definition">
          <div className="definition-term">Performance &amp; Analytics Cookies</div>
          <div className="definition-meaning">
            Collect aggregated, non-identifying telemetry about visitor counts, average reading times on surgical playbooks, and navigation paths to help us improve patient content.
          </div>
        </div>

        <div className="definition">
          <div className="definition-term">Preference Cookies</div>
          <div className="definition-meaning">
            Store display preferences, font scaling, or language selections for a customized reading experience across visits.
          </div>
        </div>

        <h2 id="sec-04">
          <span className="h2-num">04</span> Essential technical cookies
        </h2>
        <p>
          These cookies are deployed automatically upon loading the site to manage session security, load balancing, and anti-spam verification on our appointment booking forms.
        </p>

        <h2 id="sec-05">
          <span className="h2-num">05</span> Analytics and traffic measurement
        </h2>
        <p>
          We use privacy-respecting analytics tools to gauge general engagement metrics. All IP addresses are anonymized, and no sensitive personal or medical health data is ever transmitted to analytics services.
        </p>

        <h2 id="sec-06">
          <span className="h2-num">06</span> Preference cookies
        </h2>
        <p>
          These cookies help retain user interface settings (such as dark/light contrast or collapsed navigation drawers) across browser sessions.
        </p>

        <h2 id="sec-07">
          <span className="h2-num">07</span> Third-party embeds
        </h2>
        <p>
          Certain pages may embed third-party services—such as Google Maps for hospital driving directions or YouTube for educational surgical animations. These third-party providers may deploy their own cookies in accordance with their respective privacy policies.
        </p>

        <h2 id="sec-08">
          <span className="h2-num">08</span> Controlling and disabling cookies
        </h2>
        <p>
          You have the right to accept or decline non-essential cookies. You can adjust your cookie settings at any time through your web browser preferences. Please note that disabling essential cookies may impact form submission and interactive map features.
        </p>

        <h2 id="sec-09">
          <span className="h2-num">09</span> Browser-specific instructions
        </h2>
        <p>To manage cookies in your browser, refer to the official support documentation for your browser:</p>
        <ul>
          <li><strong>Google Chrome:</strong> Settings &rarr; Privacy and security &rarr; Cookies and other site data</li>
          <li><strong>Mozilla Firefox:</strong> Settings &rarr; Privacy &amp; Security &rarr; Cookies and Site Data</li>
          <li><strong>Apple Safari:</strong> Preferences &rarr; Privacy &rarr; Manage Website Data</li>
          <li><strong>Microsoft Edge:</strong> Settings &rarr; Cookies and site permissions</li>
        </ul>

        <h2 id="sec-10">
          <span className="h2-num">10</span> Policy updates
        </h2>
        <p>
          We may update this Cookie Policy periodically to reflect changes in web technologies or legal standards under the DPDP Act 2023. Any updates will be reflected with a revised &ldquo;Last Updated&rdquo; timestamp.
        </p>

        <h2 id="sec-11">
          <span className="h2-num">11</span> Contact and questions
        </h2>
        <p>
          If you have questions regarding our use of cookies or tracking technologies, please contact our digital privacy desk.
        </p>
      </>
    ),
    grievance: {
      eyebrow: 'Data & Privacy',
      title: 'Questions about',
      titleEm: 'cookies & tracking?',
      desc: 'Contact our digital administration team for any technical or privacy-related questions regarding website cookies.',
      officer: 'Digital Privacy Coordinator',
      officerRole: 'Digital Services & Compliance',
      email: 'privacy@shrimanmukund.in',
      phone: '+91 82089 27917',
      address: 'Shri Manmukund Hospital, Plot No. 7, Bapatwadi, Amravati 444604, Maharashtra, India',
    },
  },
};
