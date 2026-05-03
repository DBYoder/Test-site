import { compare, hashSync } from 'bcryptjs';
import { randomBytes } from 'crypto';
import { cookies } from 'next/headers';

const SESSION_COOKIE = 'yp_session';
const SESSION_REGEX = /^[0-9a-f]{64}$/;

export async function verifyPassword(plain: string): Promise<boolean> {
  const hash = process.env.ADMIN_PASSWORD_HASH;
  if (!hash) return false;
  return compare(plain, hash);
}

export function hashPassword(plain: string): string {
  return hashSync(plain, 12);
}

export function createSessionToken(): string {
  return randomBytes(32).toString('hex');
}

export async function getSession(): Promise<string | null> {
  const store = await cookies();
  const cookie = store.get(SESSION_COOKIE);
  return cookie?.value ?? null;
}

export function isValidToken(token: string | null | undefined): boolean {
  return !!token && SESSION_REGEX.test(token);
}

export async function verifySession(): Promise<boolean> {
  const token = await getSession();
  return isValidToken(token);
}

export { SESSION_COOKIE };
