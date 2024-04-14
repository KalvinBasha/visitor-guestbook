import Database from "better-sqlite3";
const db = new Database("database.db"); // either creates a db, or gets the existing one

// create guests table
db.exec(`
    CREATE TABLE IF NOT EXISTS guestbook (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        numGuests INTEGER NOT NULL,
        tblNum INTEGER NOT NULL
    )
`);

// populate the guests table
const insertGuest = db.prepare(`
    INSERT INTO guestbook (name, numGuests, tblNum) VALUES (?, ?, ?)
`);

insertGuest.run("Sophia Rodriguez", 4, 5);
insertGuest.run("Liam Thompson", 2, 4);
insertGuest.run("Emma Patel", 1, 1);
insertGuest.run("Noah Campbell", 4, 2);
insertGuest.run("Olivia Chang", 6, 3);
insertGuest.run("Ethan Ramirez", 2, 1);
insertGuest.run("Ava Nguyen", 2, 5);
insertGuest.run("William Foster", 3, 3);
