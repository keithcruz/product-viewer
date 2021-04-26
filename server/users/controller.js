const hal = require("hal");
const model = require("./model");

function getUsers(req, res) {
  try {
    const limit = parseInt(req.query.limit || 50);
    const offset = parseInt(req.query.offset || 0);

    const users = model.getUsers(limit, offset);
    const { totalCount } = model.getTotal();
    const count = users.length;

    const usersCollection = new hal.Resource(
      {
        limit: limit,
        offset: offset,
        count,
        totalCount,
        maxLimit: 100,
      },
      "/users"
    );

    if (limit + offset < totalCount) {
      usersCollection.link(
        "next",
        `/users?limit=${limit}&offset=${limit + offset}`
      );
    }

    if (limit - offset >= 0) {
      usersCollection.link(
        "previous",
        `/users?limit=${limit}&offset=${offset - limit}`
      );
    }
    usersCollection.link("find", `/users{?username}`);

    const usersList = users.map(
      ({ realname, username, productIds, products }) => {
        const userResource = new hal.Resource(
          {
            realname,
            username,
            productIds,
            products,
          },
          `/users/${username}`
        );

        return userResource;
      }
    );

    usersCollection.embed("users", usersList);

    res.status(200).json(usersCollection.toJSON());
  } catch (err) {
    console.log(err);
    res.status(400).end();
  }
}

function getUser(req, res) {
  try {
    const user = req.params.username;
    const { realname, username, productIds, products } = model.getUser(user)[0];

    const userResource = new hal.Resource(
      {
        realname,
        username,
        productIds,
        products,
      },
      `/users/${user}`
    );

    res.status(200).json(userResource.toJSON());
  } catch (err) {
    console.log(err);
    res.status(400).end();
  }
}

module.exports = { getUsers, getUser };
