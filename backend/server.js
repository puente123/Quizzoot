const express = require("express");
const { connectDB } = require("./database/mysqlConnection");
const cors = require("cors")

const userRouter = require("./routes/userRoutes");
const flashcardRouter = require("./routes/flashcardRoutes");
const cardDeckRouter = require("./routes/cardDeckRoutes");


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

//Middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/flashcard", flashcardRouter);
app.use("/api/cardDeck", cardDeckRouter);


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
    process.exit(1)
  }
})();
