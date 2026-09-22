import crypto from 'crypto';

const SESSION_COOKIE_NAME = 'smh_admin_session';
const SESSION_SECRET = process.env.ADMIN_SESSION_SECRET || 'smh_hospital_secret_key_2026_vidarbha_medical_portal';

// Authorized emails list
export const ALLOWLISTED_ADMIN_EMAILS = [
  'admin@shrimanmukundhospital.com',
  'vipin@shrimanmukundhospital.com',
  'swati@shrimanmukundhospital.com',
  'dr.vipin@shrimanmukundhospital.com',
  'dr.swati@shrimanmukundhospital.com',
  'drvipintongale@gmail.com',
  'drswatitongale@gmail.com',
];

// Default administrative password (can be overridden via environment variable)
export const DEFAULT_ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'Manmukund@2026';

export interface AdminSession {
  email: string;
  role: 'doctor' | 'admin';
  name: string;
  expiresAt: number;
}

/**
 * Creates a signed token for admin session
 */
export function createSessionToken(session: Omit<AdminSession, 'expiresAt'>): string {
  const expiresAt = Date.now() + 7 * 24 * 60 * 60 * 1000; // 7 days
  const data: AdminSession = { ...session, expiresAt };
  const payload = Buffer.from(JSON.stringify(data)).toString('base64url');
  const signature = crypto
    .createHmac('sha256', SESSION_SECRET)
    .update(payload)
    .digest('base64url');

  return `${payload}.${signature}`;
}

/**
 * Verifies a signed session token
 */
export function verifySessionToken(token: string): AdminSession | null {
  try {
    const parts = token.split('.');
    if (parts.length !== 2) return null;

    const [payload, signature] = parts;
    const expectedSig = crypto
      .createHmac('sha256', SESSION_SECRET)
      .update(payload)
      .digest('base64url');

    if (signature !== expectedSig) {
      return null;
    }

    const decoded = JSON.parse(Buffer.from(payload, 'base64url').toString('utf-8')) as AdminSession;

    // Check expiry
    if (decoded.expiresAt && Date.now() > decoded.expiresAt) {
      return null;
    }

    return decoded;
  } catch {
    return null;
  }
}

export { SESSION_COOKIE_NAME };
