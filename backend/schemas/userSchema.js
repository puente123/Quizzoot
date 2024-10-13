const { db } = require("../database/mysqlConnection");

const addUserToDatabase = async (userName, email, password, profilePhoto) => {
  const query =
    "INSERT INTO user (userName, email, password, profilePhoto) VALUES (?, ? , ?,? )";
  try {
    const [result] = await db.promise().query(query, [userName, email, password, profilePhoto || null]);
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

const verifyUserFromDatabase = async (email, password) => {
  const findUserQuery = 'SELECT * FROM user WHERE password= ?';
  try {
    const [rows] = await db.promise().query(findUserQuery, [password]);
    console.log(rows)
    if (rows.length === 0) {
      throw new Error("Username not found");
    }
    const user = rows[0];
    if (user.password === password) {
      return user;
    } else {
      throw new Error("Password was not valid");
    }
  } catch (error) {
    console.error("Error in verifying user", error);
    throw error;
  }
};

module.exports = { addUserToDatabase, deleteUserFromDatabase, verifyUserFromDatabase };
