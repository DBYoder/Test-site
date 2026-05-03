import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message, contact_pref } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    if (typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    db.prepare(`
      INSERT INTO leads (name, email, phone, message, contact_pref, created_at)
      VALUES (?, ?, ?, ?, ?, ?)
    `).run(
      String(name).slice(0, 200),
      String(email).slice(0, 200),
      phone ? String(phone).slice(0, 50) : null,
      String(message).slice(0, 2000),
      contact_pref === 'phone' ? 'phone' : 'email',
      new Date().toISOString(),
    );

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
