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

    // Create flashcards table if it doesn't exist
    await new Promise((resolve, reject) => {
      const createFlashcardsTableQuery = `
        CREATE TABLE IF NOT EXISTS flashcards (
          id INT AUTO_INCREMENT PRIMARY KEY,
          question TEXT NOT NULL,
          answer TEXT NOT NULL,
          FOREIGN KEY (tag) REFERENCES deckOfCards(id) ON DELETE CASCADE
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
