const asyncHandler = require("express-async-handler");

exports.homepage = asyncHandler(async (req, res, next) => {
  res.send("homepage");
});
exports.username_list = asyncHandler(async (req, res, next) => {
  res.send("list of all usernames");
});
exports.add_username = asyncHandler(async (req, res, next) => {
  res.send("add username");
});
