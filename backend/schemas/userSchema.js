const { db } = require("../database/mysqlConnection");

const createUser = async (username, email, profilePhoto) => {
  const query =
    "INSERT INTO user (userName, email, profilePhoto) VALUES (?, ? ,? )";

  try {
    const [result] = await db
      .promise()
      .query(query, [username, email, profilePhoto || null]);
    return result.insertId;
  } catch (error) {
    throw error;
  }
};

const deleteUser = async (id) => {
  const query = `DELETE FROM user WHERE id=?`;

  try {
    const [result] = await db.promise().query(query, [id]);
    return result.affectedRows;
  } catch (error) {
    throw error;
  }
};

module.exports = { createUser, deleteUser };
