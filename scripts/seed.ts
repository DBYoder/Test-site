import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';

const dataDir = process.env.DATA_DIR ?? path.join(process.cwd(), 'data');
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

const db = new Database(path.join(dataDir, 'yoders.db'));
db.pragma('journal_mode = WAL');

db.exec(`
  CREATE TABLE IF NOT EXISTS rates (
    id TEXT PRIMARY KEY, label TEXT NOT NULL, category TEXT NOT NULL,
    surface TEXT, quality TEXT, location TEXT,
    rate REAL NOT NULL, unit TEXT NOT NULL, updated_at TEXT NOT NULL
  );
`);

const now = new Date().toISOString();

const seeds = [
  { id: 'wall_standard_interior', label: 'Walls – Standard – Interior', category: 'surface', surface: 'walls', quality: 'standard', location: 'interior', rate: 0.55, unit: 'per_sqft' },
  { id: 'wall_premium_interior', label: 'Walls – Premium – Interior', category: 'surface', surface: 'walls', quality: 'premium', location: 'interior', rate: 0.90, unit: 'per_sqft' },
  { id: 'wall_standard_exterior', label: 'Walls – Standard – Exterior', category: 'surface', surface: 'walls', quality: 'standard', location: 'exterior', rate: 0.75, unit: 'per_sqft' },
  { id: 'wall_premium_exterior', label: 'Walls – Premium – Exterior', category: 'surface', surface: 'walls', quality: 'premium', location: 'exterior', rate: 1.20, unit: 'per_sqft' },
  { id: 'ceiling_standard_interior', label: 'Ceiling – Standard', category: 'surface', surface: 'ceiling', quality: 'standard', location: 'interior', rate: 0.45, unit: 'per_sqft' },
  { id: 'ceiling_premium_interior', label: 'Ceiling – Premium', category: 'surface', surface: 'ceiling', quality: 'premium', location: 'interior', rate: 0.75, unit: 'per_sqft' },
  { id: 'trim_standard_interior', label: 'Trim – Standard – Interior', category: 'surface', surface: 'trim', quality: 'standard', location: 'interior', rate: 1.10, unit: 'per_linear_ft' },
  { id: 'trim_premium_interior', label: 'Trim – Premium – Interior', category: 'surface', surface: 'trim', quality: 'premium', location: 'interior', rate: 1.75, unit: 'per_linear_ft' },
  { id: 'trim_standard_exterior', label: 'Trim – Standard – Exterior', category: 'surface', surface: 'trim', quality: 'standard', location: 'exterior', rate: 1.40, unit: 'per_linear_ft' },
  { id: 'trim_premium_exterior', label: 'Trim – Premium – Exterior', category: 'surface', surface: 'trim', quality: 'premium', location: 'exterior', rate: 2.20, unit: 'per_linear_ft' },
  { id: 'min_job_fee', label: 'Minimum Job Fee', category: 'fixed', surface: null, quality: null, location: null, rate: 350, unit: 'fixed' },
  { id: 'labor_overhead_pct', label: 'Labor & Overhead Percentage', category: 'multiplier', surface: null, quality: null, location: null, rate: 0.30, unit: 'multiplier' },
];

const insert = db.prepare(`
  INSERT OR REPLACE INTO rates (id, label, category, surface, quality, location, rate, unit, updated_at)
  VALUES (@id, @label, @category, @surface, @quality, @location, @rate, @unit, @updated_at)
`);

const insertAll = db.transaction(() => {
  for (const row of seeds) insert.run({ ...row, updated_at: now });
});

insertAll();
console.log(`Seeded ${seeds.length} rates into ${path.join(dataDir, 'yoders.db')}`);
db.close();
