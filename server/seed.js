import Database from "better-sqlite3";
const db = new Database("database.db");

db.exec(`
CREATE TABLE IF NOT EXISTS teams (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE,
    year INTEGER NOT NULL,
    imgUrl TEXT
   )
`);

const insertTeam = db.prepare(`
    INSERT INTO teams (name, year, imgUrl) VALUES (?,?,?)
`);

insertTeam.run(
  "Dallas Mavericks",
  1980,
  "https://upload.wikimedia.org/wikipedia/en/thumb/9/97/Dallas_Mavericks_logo.svg/800px-Dallas_Mavericks_logo.svg.png"
);
insertTeam.run(
  "Los Angeles Lakers",
  1947,
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/1920px-Los_Angeles_Lakers_logo.svg.png"
);
insertTeam.run(
  "Golden State Warriors",
  1946,
  "https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/1280px-Golden_State_Warriors_logo.svg.png"
);
insertTeam.run(
  "Minnesota Timberwolves",
  1989,
  "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Minnesota_Timberwolves_logo.svg/1920px-Minnesota_Timberwolves_logo.svg.png"
);
insertTeam.run(
  "Phoenix Suns",
  1968,
  "https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/Phoenix_Suns_logo.svg/1920px-Phoenix_Suns_logo.svg.png"
);
insertTeam.run(
  "Houston Rockets",
  1967,
  "https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Houston_Rockets.svg/1280px-Houston_Rockets.svg.png"
);
insertTeam.run(
  "Milwaukee Bucks",
  1968,
  "https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Milwaukee_Bucks_logo.svg/1280px-Milwaukee_Bucks_logo.svg.png"
);
insertTeam.run(
  "Philadelphia 76ers",
  1946,
  "https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/Philadelphia_76ers_logo.svg/1920px-Philadelphia_76ers_logo.svg.png"
);
