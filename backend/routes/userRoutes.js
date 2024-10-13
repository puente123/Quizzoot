 const express = require("express");
const {createUser, deleteUser} = require("../controllers/userController")
const userRouter = express.Router();

userRouter.post("/", createUser);
userRouter.delete("/:id", deleteUser)

module.exports = userRouter;
