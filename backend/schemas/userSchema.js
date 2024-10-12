const { db } = require("../database/mysqlConnection");

const createUser = (username, email, profilePhoto, callback) => {
  const query =
    "INSERT INTO user (userName, email, profilePhoto) VALUES (?, ? ,? )";

  db.query(query, [username, email, profilePhoto || null], (error, results) => {
    if (error) {
      return callback(error, null);
    }
    return callback(null, results.insertId);
  });
};

const deleteUser = (id, callback) => {
  const query = `DELETE FROM user WHERE id=?`;

  db.query(query, [id], (error, results) => {
    if (error) {
      return callback(error, null);
    }
    return callback(null, results.affectedRows);
  });
};

module.exports = { createUser, deleteUser };
