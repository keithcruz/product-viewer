"use strict";

const express = require("express");
const morgan = require("morgan");
const { userRouter } = require("./users/router");

const PORT = 8080;
const HOST = "0.0.0.0";

const app = express();

app.use(morgan("dev"));

app.use("/api/users", userRouter);

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
