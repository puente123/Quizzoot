const express = require('express')
const {createFlashcard, deleteFlashcard} = require("../controllers/cardDeckController")
const cardDeckRouter = express.Router()

flashcardRouter.post("/", createFlashcard)
flashcardRouter.delete("/:id", deleteFlashcard)

module.exports = flashcardRouter