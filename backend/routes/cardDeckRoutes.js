const express = require('express')
const {createCardDeck, deleteCardDeck} = require("../controllers/cardDeckController")
const cardDeckRouter = express.Router()

flashcardRouter.post("/", createCardDeck)
flashcardRouter.delete("/:id", deleteCardDeck)

module.exports = cardDeckRouter