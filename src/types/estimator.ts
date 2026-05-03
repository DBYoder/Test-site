export type Surface = 'walls' | 'ceiling' | 'trim';
export type Quality = 'standard' | 'premium';
export type JobLocation = 'interior' | 'exterior';

export interface RoomInput {
  id: string;
  name: string;
  length: number;
  width: number;
  height: number;
  surfaces: Surface[];
  quality: Quality;
  location: JobLocation;
}

export interface EstimateLineItem {
  roomName: string;
  surface: Surface;
  quantity: number;
  unit: 'sqft' | 'lf';
  rate: number;
  subtotal: number;
}

export interface EstimateResult {
  lineItems: EstimateLineItem[];
  materialSubtotal: number;
  laborAndOverhead: number;
  total: number;
  minimumApplied: boolean;
}
