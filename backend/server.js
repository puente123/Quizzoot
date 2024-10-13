const express = require("express");
const {connectDB} = require("./database/mysqlConnection")

const app = express();
const PORT = process.env.PORT || 5000;

connectDB()

// Basic route
app.get("/", (req, res) => {
  res.send("Hello, MERN with MySQL!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
