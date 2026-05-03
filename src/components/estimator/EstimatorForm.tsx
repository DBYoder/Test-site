'use client';

import { useState, useRef } from 'react';
import RoomRow from './RoomRow';
import EstimateResultCard from './EstimateResult';
import { calculateEstimate } from './estimatorLogic';
import type { RoomInput } from '@/types/estimator';
import type { RatesMap } from '@/types/rates';
import Button from '@/components/ui/Button';

function defaultRoom(): RoomInput {
  return {
    id: crypto.randomUUID(),
    name: '',
    length: 12,
    width: 12,
    height: 9,
    surfaces: ['walls'],
    quality: 'standard',
    location: 'interior',
  };
}

export default function EstimatorForm({ rates }: { rates: RatesMap }) {
  const [rooms, setRooms] = useState<RoomInput[]>([defaultRoom()]);
  const resultRef = useRef<HTMLDivElement>(null);
  const [result, setResult] = useState<ReturnType<typeof calculateEstimate> | null>(null);

  function updateRoom(id: string, updates: Partial<RoomInput>) {
    setRooms((prev) => prev.map((r) => (r.id === id ? { ...r, ...updates } : r)));
    setResult(null);
  }

  function removeRoom(id: string) {
    setRooms((prev) => prev.filter((r) => r.id !== id));
    setResult(null);
  }

  function addRoom() {
    setRooms((prev) => [...prev, defaultRoom()]);
  }

  function handleCalculate(e: React.FormEvent) {
    e.preventDefault();
    const namedRooms = rooms.map((r, i) => ({
      ...r,
      name: r.name.trim() || `Room ${i + 1}`,
    }));
    const est = calculateEstimate(namedRooms, rates);
    setResult(est);
    setTimeout(() => resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
  }

  return (
    <div className="flex flex-col gap-8">
      <form onSubmit={handleCalculate} className="flex flex-col gap-6">
        {rooms.map((room, i) => (
          <RoomRow
            key={room.id}
            room={room}
            index={i}
            onChange={updateRoom}
            onRemove={removeRoom}
            showRemove={rooms.length > 1}
          />
        ))}

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            type="button"
            onClick={addRoom}
            className="flex items-center gap-2 text-brand-teal font-semibold text-sm border-2 border-brand-teal border-dashed rounded-2xl px-6 py-4 hover:bg-brand-teal/5 transition-colors"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
            </svg>
            Add Another Room
          </button>

          <Button type="submit" variant="primary" size="lg" className="flex-1 sm:flex-none">
            Calculate Estimate
          </Button>
        </div>
      </form>

      {result && (
        <div ref={resultRef} className="scroll-mt-24">
          <EstimateResultCard result={result} />
        </div>
      )}
    </div>
  );
}
