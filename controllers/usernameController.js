const asyncHandler = require("express-async-handler");

const db = require("../db/queries.js");

exports.homepage = asyncHandler(async (req, res, next) => {});
exports.username_list = asyncHandler(async (req, res, next) => {
  const usernames = await db.getAllUsernames();

  console.log(("Usernames; ", usernames));

  res.send("Usernames: " + usernames.map((user) => user.username).join(", "));
});
exports.add_username = asyncHandler(async (req, res, next) => {
  const username = req.body.username;

  await db.insertUsername(username);
  const usernames = await db.getAllUsernames();

  res.send(usernames);
});
