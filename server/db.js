const Db = require("better-sqlite3");

const db = new Db("do.db", { verbose: console.log, fileMustExist: true });

module.exports = { db };
