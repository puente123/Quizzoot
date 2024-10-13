const mysql = require("mysql2");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
});


const connectDB = async () => {
 

  try {
    await new Promise((resolve, reject) => {
      db.connect((err) => {
        if (err) {
          console.error("Error connecting to MySQL:", err);
          reject(err);
        } else {
          console.log("Connected to MySQL");
          resolve();
        }
      });
    });

    /**
     * Note: Make sure you create tables in a specific order
     *       if a table references another the references table must already exits
     */

    const databaseName = "Quizzoot";
    await new Promise((resolve, reject) => {
      db.query(
        `CREATE DATABASE IF NOT EXISTS \`${databaseName}\``,
        (err, result) => {
          if (err) {
            console.error("Error creating database:", err);
            reject(err);
          } else {
            console.log(`Database '${databaseName}' ready`);
            resolve();
          }
        }
      );
    });

    await new Promise((resolve, reject) => {
      db.changeUser({ database: databaseName }, (err) => {
        if (err) {
          console.error("Error changing database:", err);
          reject(err);
        } else {
          console.log(`Connected to database '${databaseName}'`);
          resolve();
        }
      });
    });

    //Creates User Table
    await new Promise((resolve, reject) => {
      const createUserTableQuery = `
          CREATE TABLE IF NOT EXISTS user (
            id INT AUTO_INCREMENT PRIMARY KEY,
            userName TEXT NOT NULL UNIQUE,
             email TEXT NOT NULL,
             profilePhoto BLOB
          )
        `;
      db.query(createUserTableQuery, (err, result) => {
        if (err) {
          console.error("Error creating user table:", err);
          reject(err);
        } else {
          console.log("User table created or already exists");
          resolve();
        }
      });
    });

    //Creates Deck of Cards Table
    await new Promise((resolve, reject) => {
      const createDeckOfCardsTableQuery = `
        CREATE TABLE IF NOT EXISTS deckOfCards (
          id INT AUTO_INCREMENT PRIMARY KEY,
          name TEXT NOT NULL,
          subject TEXT,
          private BOOLEAN DEFAULT FALSE,
          userId INT, 
          FOREIGN KEY (userId) REFERENCES user(id) ON DELETE CASCADE
        )
      `;
      db.query(createDeckOfCardsTableQuery, (err, result) => {
        if (err) {
          console.error("Error creating deck of cards table:", err);
          reject(err);
        } else {
          console.log("Deck of Cards table created or already exists");
          resolve();
        }
      });
    });

    // Create flashcards table
    await new Promise((resolve, reject) => {
      const createFlashcardsTableQuery = `
          CREATE TABLE IF NOT EXISTS flashcards (
            id INT AUTO_INCREMENT PRIMARY KEY,
            question TEXT NOT NULL,
            answer TEXT NOT NULL,
            deckId INT,
            FOREIGN KEY (deckId) REFERENCES deckOfCards(id) ON DELETE CASCADE
          )
        `;
      db.query(createFlashcardsTableQuery, (err, result) => {
        if (err) {
          console.error("Error creating flashcards table:", err);
          reject(err);
        } else {
          console.log("Flashcards table created or already exists");
          resolve();
        }
      });
    });
  } catch (err) {
    console.error("Error during database setup:", err);
    throw err;
  }
};

module.exports = { connectDB, db };
