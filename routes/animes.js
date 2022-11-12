var express = require("express");
var router = express.Router();
const animeCtrl = require('../controllers/animes');
const isLoggedIn = require("../config/auth");

router.get("/", isLoggedIn, animeCtrl.index);
router.get("/new", isLoggedIn, animeCtrl.new);
router.post("/", isLoggedIn, animeCtrl.create);
router.get("/:id", animeCtrl.show);
router.delete("/:id", isLoggedIn, animeCtrl.delete);
router.get('/:id/edit', isLoggedIn, animeCtrl.edit);
router.put('/:id', isLoggedIn, animeCtrl.update);




module.exports = router;
