export interface Rate {
  id: string;
  label: string;
  category: string;
  surface: string | null;
  quality: string | null;
  location: string | null;
  rate: number;
  unit: string;
  updated_at: string;
}

export type RatesMap = Record<string, number>;

export interface RateUpdate {
  id: string;
  rate: number;
}
