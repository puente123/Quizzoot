const {
  addUserToDatabase,
  deleteUserFromDatabase,
} = require("../schemas/userSchema");

const createUser = async (req, res) => {
  const { username, email, profilePhoto } = req.body;
  try {
    const response = await addUserToDatabase(username, email, profilePhoto);
    res.status(201).json({id: response});
  } catch (error) {
    res.status(401).json({error: error.message});
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await deleteUserFromDatabase(id);
    res.status(201).json({affectedRoww: response});
  } catch (error) {
    res.status(401).json({error: error.message});
  }
};


module.exports = {createUser, deleteUser}