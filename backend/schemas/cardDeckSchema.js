const { db } = require("../database/mysqlConnection");

const saveCardDeckToDatabase = async (name, userID) => {
  const query = "INSERT INTO deckOfCards (name, userID) VALUES (?, ?)";
  try {
    const [result] = await db.promise().query(query, [name, userID]);
    return result.insertId;
  } catch (error) {
    throw error;
  }
};

const deleteCardDeckFromDatabase = async (id) => {
  const query = "DELETE FROM deckOfCards WHERE id = ?";
  try {
    const [result] = await db.promise().query(query, [id]);
    return result.affectedRows;
  } catch (error) {
    throw error;
  }
};

module.exports = { saveCardDeckToDatabase, deleteCardDeckFromDatabase };
