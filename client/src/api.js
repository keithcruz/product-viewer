async function getData(limit = 50, offset = 0) {
  try {
    const data = await fetch(`/api/users?limit=${limit}&offset=${offset}`);
    if (!data.ok) {
      throw new Error(
        `Fetch failed with error:${data.statusText} ${data.status}`
      );
    }

    const json = await data.json();
    const users = json._embedded.users;
    return users;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

module.exports = { getData };
