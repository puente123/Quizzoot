const express = require('express')
const {createFlashcard, deleteFlashcard} = require("../controllers/flashcardController")
const flashcardRouter = express.Router()

flashcardRouter.post("/", createFlashcard)
flashcardRouter.delete("/:id", deleteFlashcard)

module.exports = flashcardRouter