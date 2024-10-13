const { response } = require("express");
const {
  saveCardDeckToDatabase,
  deleteCardDeckFromDatabase,
  getUsersDeckOfCardsFromDatabase,
  getPublicDecksFromDatabase
} = require("../schemas/cardDeckSchema");

const createCardDeck = async (req, res) => {
  const { name, private, userId } = req.body;
  try {
    const response = await saveCardDeckToDatabase(name, private, userId);
    res.status(201).json({ id: response });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

const deleteCardDeck = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await deleteCardDeckFromDatabase(id);
    res.status(201).json({ affectedRows: response });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

const getUsersCardDecks = async (req, res) => {
  const { userId } = req.body;

  try {
    const response = await getUsersDeckOfCardsFromDatabase(userId);
    console.log(response);
    res.status(201).json(response);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

const getPublicDecks = async (req, res) => {
  try{
    const response = await getPublicDecksFromDatabase()
    res.status(200).json(response)
  }
  catch(error){
    res.status(401).json({error: error.message})
  }
}

module.exports = { createCardDeck, deleteCardDeck, getUsersCardDecks, getPublicDecks };
