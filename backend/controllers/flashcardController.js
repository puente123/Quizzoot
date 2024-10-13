const {
  addFlascardToDatabase,
  deleteFlashcardFromDatabase,
} = require("../schemas/flashcardSchema");

const createFlashcard = async (req, res) => {
  const { question, answer } = req.body;
  try {
    const response = await addFlascardToDatabase(question, answer);
    res.status(201).json(response);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

const deleteFlashcard = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await deleteFlashcardFromDatabase(id);
    res.status(201).json(response);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

module.exports = {
  createFlashcard,
  deleteFlashcard,
};
