const express = require('express')
const {createCardDeck, deleteCardDeck, getAllCardDecks} = require("../controllers/cardDeckController")
const cardDeckRouter = express.Router()

cardDeckRouter.post("/", createCardDeck)
cardDeckRouter.get('/', getAllCardDecks);
cardDeckRouter.delete("/:id", deleteCardDeck)

module.exports = cardDeckRouter