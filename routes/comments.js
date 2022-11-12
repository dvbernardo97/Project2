var express = require("express");
var router = express.Router();
const isLoggedIn = require("../config/auth");
const commentsCtrl = require("../controllers/comments")

router.post("/animes/:id/comments", isLoggedIn, commentsCtrl.create)


module.exports = router