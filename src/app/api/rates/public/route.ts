import { NextResponse } from 'next/server';
import { getRatesMap } from '@/lib/rates';

export const revalidate = 60;

export async function GET() {
  const rates = getRatesMap();
  return NextResponse.json(rates);
}
