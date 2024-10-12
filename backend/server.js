const express = require("express");
const mysql = require("mysql2");

const app = express();
const PORT = process.env.PORT || 5000;

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL");

  const databaseName = "Quizzoot";
  db.query(
    `CREATE DATABASE IF NOT EXISTS \`${databaseName}\``,
    (err, result) => {
      if (err) {
        console.error("Error creating database:", err);
        return;
      }
      console.log(`Database '${databaseName}' ready`);

      db.changeUser({ database: databaseName }, (err) => {
        if (err) {
          console.error("Error changing database:", err);
          return;
        }
        console.log(`Connected to database '${databaseName}'`);
      });
    }
  );
});

// Basic route
app.get("/", (req, res) => {
  res.send("Hello, MERN with MySQL!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
