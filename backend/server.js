const express = require("express");
const { connectDB } = require("./database/mysqlConnection");
const cors = require("cors")

const app = express();
const PORT = process.env.PORT || 2500;
app.use(cors())

(async () => {
  try {
    await connectDB();

    // Basic route
    app.get("/", (req, res) => {
      res.send("Hello, MERN with MySQL!");
    });

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
    
  } catch (error) {
    console.error("Failed to connnect", error);
  }
})();
