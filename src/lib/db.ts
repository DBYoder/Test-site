import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';

let db: Database.Database | null = null;

function getDb(): Database.Database {
  if (db) return db;

  const dataDir = process.env.DATA_DIR ?? path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

  db = new Database(path.join(dataDir, 'yoders.db'));
  db.pragma('journal_mode = WAL');

  db.exec(`
    CREATE TABLE IF NOT EXISTS rates (
      id          TEXT PRIMARY KEY,
      label       TEXT NOT NULL,
      category    TEXT NOT NULL,
      surface     TEXT,
      quality     TEXT,
      location    TEXT,
      rate        REAL NOT NULL,
      unit        TEXT NOT NULL,
      updated_at  TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS leads (
      id           INTEGER PRIMARY KEY AUTOINCREMENT,
      name         TEXT NOT NULL,
      email        TEXT NOT NULL,
      phone        TEXT,
      message      TEXT,
      contact_pref TEXT,
      created_at   TEXT NOT NULL
    );
  `);

  return db;
}

export default getDb;
