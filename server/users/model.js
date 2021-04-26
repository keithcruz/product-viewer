const { db } = require("../db");

function getUsers(limit = 50, offset = 0) {
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
      LIMIT ${limit} OFFSET ${offset}
    `);
  const data = stmt.all();
  return data;
}

function getTotal() {
  const stmt = db.prepare(`
    SELECT
      COUNT(*) as totalCount
    FROM
      users
  `);
  const data = stmt.all();
  console.log(data);
  return data[0];
}

function getUser(username) {
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
    WHERE
      username = '${username}'

  `);
  const data = stmt.all();
  return data;
}

module.exports = { getUsers, getTotal, getUser };
