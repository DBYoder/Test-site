'use client';

import type { RoomInput, Surface, Quality, JobLocation } from '@/types/estimator';

interface RoomRowProps {
  room: RoomInput;
  index: number;
  onChange: (id: string, updates: Partial<RoomInput>) => void;
  onRemove: (id: string) => void;
  showRemove: boolean;
}

const SURFACES: { value: Surface; label: string }[] = [
  { value: 'walls', label: 'Walls' },
  { value: 'ceiling', label: 'Ceiling' },
  { value: 'trim', label: 'Trim' },
];

function toggleSurface(surfaces: Surface[], s: Surface): Surface[] {
  return surfaces.includes(s) ? surfaces.filter((x) => x !== s) : [...surfaces, s];
}

export default function RoomRow({ room, index, onChange, onRemove, showRemove }: RoomRowProps) {
  const inputCls = 'border border-gray-200 rounded-lg px-3 py-2 text-sm text-brand-charcoal focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent w-full';

  return (
    <div className="bg-brand-offwhite rounded-2xl p-6 flex flex-col gap-5 relative">
      {showRemove && (
        <button
          type="button"
          onClick={() => onRemove(room.id)}
          className="absolute top-4 right-4 text-brand-slate hover:text-red-500 transition-colors text-sm"
          aria-label="Remove room"
        >
          ✕
        </button>
      )}

      <div className="flex items-center gap-3">
        <span className="w-7 h-7 rounded-full bg-brand-coral text-white text-xs font-bold flex items-center justify-center shrink-0">
          {index + 1}
        </span>
        <div className="flex-1">
          <label htmlFor={`room-name-${room.id}`} className="text-xs font-semibold text-brand-slate uppercase tracking-wide block mb-1">
            Room Name
          </label>
          <input
            id={`room-name-${room.id}`}
            type="text"
            value={room.name}
            onChange={(e) => onChange(room.id, { name: e.target.value })}
            placeholder="e.g. Living Room"
            className={inputCls}
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {(['length', 'width', 'height'] as const).map((dim) => (
          <div key={dim}>
            <label htmlFor={`${dim}-${room.id}`} className="text-xs font-semibold text-brand-slate uppercase tracking-wide block mb-1">
              {dim === 'length' ? 'Length (ft)' : dim === 'width' ? 'Width (ft)' : 'Height (ft)'}
            </label>
            <input
              id={`${dim}-${room.id}`}
              type="number"
              min="1"
              max="999"
              value={room[dim]}
              onChange={(e) => onChange(room.id, { [dim]: parseFloat(e.target.value) || 0 })}
              className={inputCls}
            />
          </div>
        ))}
      </div>

      <div className="grid sm:grid-cols-3 gap-5">
        {/* Surfaces */}
        <fieldset>
          <legend className="text-xs font-semibold text-brand-slate uppercase tracking-wide mb-2">Surfaces</legend>
          <div className="flex flex-col gap-1.5">
            {SURFACES.map(({ value, label }) => (
              <label key={value} className="flex items-center gap-2 cursor-pointer text-sm text-brand-charcoal">
                <input
                  type="checkbox"
                  checked={room.surfaces.includes(value)}
                  onChange={() => onChange(room.id, { surfaces: toggleSurface(room.surfaces, value) })}
                  className="accent-brand-teal"
                />
                {label}
              </label>
            ))}
          </div>
        </fieldset>

        {/* Quality */}
        <fieldset>
          <legend className="text-xs font-semibold text-brand-slate uppercase tracking-wide mb-2">Paint Quality</legend>
          <div className="flex flex-col gap-1.5">
            {(['standard', 'premium'] as Quality[]).map((q) => (
              <label key={q} className="flex items-center gap-2 cursor-pointer text-sm text-brand-charcoal capitalize">
                <input
                  type="radio"
                  name={`quality-${room.id}`}
                  value={q}
                  checked={room.quality === q}
                  onChange={() => onChange(room.id, { quality: q })}
                  className="accent-brand-coral"
                />
                {q}
              </label>
            ))}
          </div>
        </fieldset>

        {/* Location */}
        <fieldset>
          <legend className="text-xs font-semibold text-brand-slate uppercase tracking-wide mb-2">Job Type</legend>
          <div className="flex flex-col gap-1.5">
            {(['interior', 'exterior'] as JobLocation[]).map((loc) => (
              <label key={loc} className="flex items-center gap-2 cursor-pointer text-sm text-brand-charcoal capitalize">
                <input
                  type="radio"
                  name={`location-${room.id}`}
                  value={loc}
                  checked={room.location === loc}
                  onChange={() => onChange(room.id, { location: loc })}
                  className="accent-brand-coral"
                />
                {loc}
              </label>
            ))}
          </div>
        </fieldset>
      </div>
    </div>
  );
}
