const {
  addFlascardToDatabase,
  deleteFlashcardFromDatabase,
} = require("../schemas/flashcardSchema");

const createFlashcard = async (req, res) => {
  const { question, answer, deckId } = req.body;
  try {
    const response = await addFlascardToDatabase(question, answer, deckId);
    res.status(201).json({id: response});
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

const deleteFlashcard = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await deleteFlashcardFromDatabase(id);
    res.status(201).json({affectedRows: response});
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

module.exports = {
  createFlashcard,
  deleteFlashcard,
};
