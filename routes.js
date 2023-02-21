const express = require("express");
const router = express.Router();
const Controller = require("./hello");
router.get("/", Controller.hello);

module.exports = router;
