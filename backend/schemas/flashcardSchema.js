const db = require("../database/mysqlConnection");

const addFlascardToDatabase = async (question, answer, tag) => {
  const query = "INSERT INTO flashcards (question, answer, tag) VALUES (?, ?, ?)";
  try {
    const [result] = await db.promise().query(query, [question, answer, tag]);
    return result.insertId;
  } catch (error) {
    throw error;
  }
};

const deleteFlashcardFromDatabase = async (id) => {
  const query = "DELETE FROM flashcards WHERE id = ?";
  try {
    const [result] = await db.promise().query(query, [id]);
    return result.affectedRows;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  addFlascardToDatabase,
  deleteFlashcardFromDatabase,
};
