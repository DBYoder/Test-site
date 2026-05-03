import getDb from './db';
import type { Rate, RatesMap, RateUpdate } from '@/types/rates';

export function getAllRates(): Rate[] {
  return getDb().prepare('SELECT * FROM rates ORDER BY category, id').all() as Rate[];
}

export function getRatesMap(): RatesMap {
  const rows = getDb().prepare('SELECT id, rate FROM rates').all() as { id: string; rate: number }[];
  return Object.fromEntries(rows.map((r) => [r.id, r.rate]));
}

export function updateRates(changes: RateUpdate[]): number {
  const db = getDb();
  const stmt = db.prepare('UPDATE rates SET rate = ?, updated_at = ? WHERE id = ?');
  const now = new Date().toISOString();
  const run = db.transaction((updates: RateUpdate[]) => {
    let count = 0;
    for (const { id, rate } of updates) {
      const result = stmt.run(rate, now, id);
      count += result.changes;
    }
    return count;
  });
  return run(changes) as number;
}

export function rateExists(id: string): boolean {
  const row = getDb().prepare('SELECT 1 FROM rates WHERE id = ?').get(id);
  return !!row;
}
