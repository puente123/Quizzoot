const express = require('express')
const {createCardDeck, deleteCardDeck} = require("../controllers/cardDeckController")
const cardDeckRouter = express.Router()

cardDeckRouter.post("/", createCardDeck)
cardDeckRouter.delete("/:id", deleteCardDeck)

module.exports = cardDeckRouter