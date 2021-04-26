async function getData() {
  try {
    const data = await fetch("/api/users");
    if (!data.ok) {
      throw new Error(
        `Fetch failed with error:${data.statusText} ${data.status}`
      );
    }
    const json = await data.json();
    return json;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

module.exports = { getData };
