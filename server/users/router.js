const { Router } = require("express");
const { getUsers, getUser } = require("./controller");

const userRouter = Router();

userRouter.route("/").get(getUsers);
userRouter.route("/:username").get(getUser);

module.exports = { userRouter };
