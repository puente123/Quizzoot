const db = require("../database/mysqlConnection");

const addFlascardToDatabase = async (question, answer) => {
  try {
    const [result] = await db.promise().query(query, [question, answer]);
    return result.insertId;
  } catch (error) {
    throw error;
  }
};

const deleteFlashcardFromDatabase = async (id) => {
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
