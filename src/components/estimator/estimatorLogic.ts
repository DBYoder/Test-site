import type { RoomInput, EstimateLineItem, EstimateResult } from '@/types/estimator';
import type { RatesMap } from '@/types/rates';

export function calculateEstimate(rooms: RoomInput[], rates: RatesMap): EstimateResult {
  const lineItems: EstimateLineItem[] = [];

  for (const room of rooms) {
    const { length, width, height, surfaces, quality, location, name } = room;

    const wallSqft = Math.max(0, 2 * (length + width) * height - 21);
    const ceilingSqft = length * width;
    const trimLf = 2 * (length + width) + 40;

    for (const surface of surfaces) {
      let quantity = 0;
      let rateKey = '';
      const unit: 'sqft' | 'lf' = surface === 'trim' ? 'lf' : 'sqft';

      if (surface === 'walls') {
        quantity = wallSqft;
        rateKey = `wall_${quality}_${location}`;
      } else if (surface === 'ceiling') {
        quantity = ceilingSqft;
        rateKey = `ceiling_${quality}_interior`;
      } else if (surface === 'trim') {
        quantity = trimLf;
        rateKey = `trim_${quality}_${location}`;
      }

      const rate = rates[rateKey] ?? 0;
      const subtotal = quantity * rate;

      lineItems.push({ roomName: name, surface, quantity, unit, rate, subtotal });
    }
  }

  const materialSubtotal = lineItems.reduce((sum, li) => sum + li.subtotal, 0);
  const laborMultiplier = rates['labor_overhead_pct'] ?? 0.3;
  const laborAndOverhead = materialSubtotal * laborMultiplier;
  const rawTotal = materialSubtotal + laborAndOverhead;
  const minFee = rates['min_job_fee'] ?? 350;
  const minimumApplied = rawTotal < minFee && rawTotal > 0;
  const total = rawTotal === 0 ? 0 : Math.max(rawTotal, minFee);

  return { lineItems, materialSubtotal, laborAndOverhead, total, minimumApplied };
}
