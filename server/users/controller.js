const { get, getTotal } = require("./model");

function getUsers(req, res) {
  try {
    const limit = req.query.limit;
    const offset = req.query.offset;
    console.log(limit, offset);

    const users = get(limit, offset);
    const { totalCount } = getTotal();
    const count = users.length;

    const data = {
      users,
      count,
      totalCount,
    };
    console.log(data);
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(400).end();
  }
}

module.exports = { getUsers };
