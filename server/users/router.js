const { Router } = require("express");
const { getUsers } = require("./controller");

const userRouter = Router();

userRouter.route("/").get(getUsers);

module.exports = { userRouter };
