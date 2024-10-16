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

const getDeckOfCardsFromDatabase = async (userID) => {
  const query = `
    SELECT 
      d.id AS deckId,
      d.name AS deckName,
      d.private AS deckPrivate,
      f.id AS flashcardId,
      f.question AS flashcardQuestion,
      f.answer AS flashcardAnswer
    FROM 
      deckOfCards d
    LEFT JOIN 
      flashcards f
    ON 
      d.id = f.tag
    WHERE 
      d.userID = ?
  `;

  try {
    const [rows] = await db.promise().query(query, [userID]);

    // Group flashcards by deck
    const decks = {};
    rows.forEach((row) => {
      if (!decks[row.deckId]) {
        decks[row.deckId] = {
          id: row.deckId,
          name: row.deckName,
          private: row.deckPrivate,
          flashcards: [],
        };
      }
      if (row.flashcardId) {
        decks[row.deckId].flashcards.push({
          id: row.flashcardId,
          question: row.flashcardQuestion,
          answer: row.flashcardAnswer,
          tag: row.flashcardTag,
        });
      }
    });
    return Object.values(decks);
  } catch (error) {
    throw error;
  }
};

module.exports = { saveCardDeckToDatabase, deleteCardDeckFromDatabase, getDeckOfCardsFromDatabase };
