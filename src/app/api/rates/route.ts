import { NextRequest, NextResponse } from 'next/server';
import { getAllRates, updateRates, rateExists } from '@/lib/rates';
import { verifySession } from '@/lib/auth';
import type { RateUpdate } from '@/types/rates';

export const dynamic = 'force-dynamic';

async function checkAuth() {
  const valid = await verifySession();
  if (!valid) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  return null;
}

export async function GET() {
  const authError = await checkAuth();
  if (authError) return authError;

  const rates = getAllRates();
  return NextResponse.json(rates);
}

export async function PUT(request: NextRequest) {
  const authError = await checkAuth();
  if (authError) return authError;

  try {
    const body = await request.json();

    if (!Array.isArray(body)) {
      return NextResponse.json({ error: 'Expected array of updates' }, { status: 400 });
    }

    const changes: RateUpdate[] = [];
    for (const item of body) {
      const { id, rate } = item;
      if (typeof id !== 'string' || typeof rate !== 'number') {
        return NextResponse.json({ error: 'Invalid update format' }, { status: 400 });
      }
      if (rate <= 0 || rate > 99999) {
        return NextResponse.json({ error: `Rate out of range for ${id}` }, { status: 400 });
      }
      if (!rateExists(id)) {
        return NextResponse.json({ error: `Unknown rate id: ${id}` }, { status: 400 });
      }
      changes.push({ id, rate });
    }

    const updated = updateRates(changes);
    return NextResponse.json({ ok: true, updated });
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
