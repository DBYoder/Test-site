import { getAllRates } from '@/lib/rates';
import RatesTable from '@/components/admin/RatesTable';

export const metadata = {
  title: 'Rate Management — Admin',
  robots: { index: false, follow: false },
};

export default function AdminRatesPage() {
  const rates = getAllRates();
  return <RatesTable initialRates={rates} />;
}
