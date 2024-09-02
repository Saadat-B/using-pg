const express = require("express");

const router = express.Router();

const username_controller = require("../controllers/usernameController.js");

router.get("/", username_controller.homepage);
router.get("/new", username_controller.username_list);
router.post("/new", username_controller.add_username);

module.exports = router;
