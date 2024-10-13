const { db } = require("../database/mysqlConnection");

const addUserToDatabase = async (userName, email, profilePhoto) => {
  const query =
    "INSERT INTO user (userName, email, profilePhoto) VALUES (?, ? ,? )";

  try {
    const [result] = await db.promise().query(query, [userName, email, profilePhoto || null]);
    return result.insertId;
  } catch (error) {
    throw error;
  }
};

const deleteUserFromDatabase = async (id) => {
  const query = `DELETE FROM user WHERE id=?`;

  try {
    const [result] = await db.promise().query(query, [id]);
    return result.affectedRows;
  } catch (error) {
    throw error;
  }
};

module.exports = { addUserToDatabase, deleteUserFromDatabase };
