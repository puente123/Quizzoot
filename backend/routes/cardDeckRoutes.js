const express = require('express')
const {createCardDeck, deleteCardDeck, getUsersCardDecks, getPublicDecks} = require("../controllers/cardDeckController")
const cardDeckRouter = express.Router()

cardDeckRouter.post("/", createCardDeck)
cardDeckRouter.get('/', getUsersCardDecks);
cardDeckRouter.get('/public', getPublicDecks)
cardDeckRouter.delete("/:id", deleteCardDeck)

module.exports = cardDeckRouter