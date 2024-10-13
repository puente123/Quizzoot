const { db } = require("../database/mysqlConnection");

const saveCardDeckToDatabase = async (name, private, userID) => {
  const query =
    "INSERT INTO deckOfCards (name, private, userID) VALUES (?,?, ?)";
  try {
    const [result] = await db.promise().query(query, [name, private, userID]);
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
