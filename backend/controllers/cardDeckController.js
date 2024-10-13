const {
  saveCardDeckToDatabase,
  deleteCardDeckFromDatabase,
} = require("../schemas/cardDeckSchema");

const createCardDeck = async (req, res) => {
  const { name, private, userID } = req.body;
  try {
    const response = await saveCardDeckToDatabase(name, private, userID);
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

module.exports = { createCardDeck, deleteCardDeck };
