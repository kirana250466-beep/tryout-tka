-- Opsional. Tabel ini dibuat otomatis oleh API saat pertama kali dipakai.
-- Jalankan manual hanya jika ingin menyiapkan database lebih dulu:
--   npx wrangler d1 execute quiz-db --remote --file=schema.sql
-- Tabel lama dari versi satu-quiz (session, students, answers) tidak dipakai lagi dan boleh dibiarkan.
CREATE TABLE IF NOT EXISTS quiz_session (
  quiz TEXT PRIMARY KEY,
  status TEXT NOT NULL DEFAULT 'off',
  round INTEGER NOT NULL DEFAULT 0,
  updated_at INTEGER NOT NULL DEFAULT 0
);
INSERT OR IGNORE INTO quiz_session (quiz, status, round, updated_at) VALUES ('mat', 'off', 0, 0);
INSERT OR IGNORE INTO quiz_session (quiz, status, round, updated_at) VALUES ('ing', 'off', 0, 0);
INSERT OR IGNORE INTO quiz_session (quiz, status, round, updated_at) VALUES ('tka', 'off', 0, 0);

CREATE TABLE IF NOT EXISTS quiz_students (
  quiz TEXT NOT NULL,
  round INTEGER NOT NULL,
  name_key TEXT NOT NULL,
  display TEXT NOT NULL,
  created_at INTEGER NOT NULL,
  last_seen INTEGER NOT NULL,
  PRIMARY KEY (quiz, round, name_key)
);

CREATE TABLE IF NOT EXISTS quiz_answers (
  quiz TEXT NOT NULL,
  round INTEGER NOT NULL,
  name_key TEXT NOT NULL,
  n INTEGER NOT NULL,
  choice TEXT NOT NULL,
  correct INTEGER NOT NULL,
  answered_at INTEGER NOT NULL,
  PRIMARY KEY (quiz, round, name_key, n)
);
