"use strict";

const express = require("express");
const morgan = require("morgan");
const Db = require("better-sqlite3");

const db = new Db("do.db", { verbose: console.log, fileMustExist: true });

const PORT = 8080;
const HOST = "0.0.0.0";

const app = express();

app.use(morgan("dev"));

app.get("/api", (req, res) => {
  const stmt = db.prepare(`
    SELECT
      users.realname,
      users.username,
      group_concat(user_products.product) as productIds,
      group_concat(products.name) as products
    FROM
      users
    LEFT JOIN
      user_products ON users.username = user_products.user
    INNER JOIN
      products ON user_products.product = products.id
    GROUP BY
    	users.username
  `);
  const data = stmt.all();
  console.log(data);
  res.status(200).json(data);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
