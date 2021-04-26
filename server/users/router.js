const { Router } = require("express");
const { db } = require("../db");

const userRouter = Router();

function getUsers(req, res) {
  try {
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
  } catch (err) {
    console.log(err);
    res.status(400).end();
  }
}

userRouter.route("/").get(getUsers);

module.exports = { userRouter };
