 const express = require("express");
const {createUser, deleteUser, signInUser} = require("../controllers/userController")
const userRouter = express.Router();

userRouter.post("/", createUser);
userRouter.delete("/:id", deleteUser)
userRouter.get('/signin', signInUser)


module.exports = userRouter;
