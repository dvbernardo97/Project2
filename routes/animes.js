var express = require("express");
var router = express.Router();
const animeCtrl = require('../controllers/animes')


router.get("/", animeCtrl.index);
router.get("/new", animeCtrl.new);
router.post("/", animeCtrl.create);
router.get("/:id", animeCtrl.show);
router.delete("/:id", animeCtrl.delete);
router.get('/:id/edit', animeCtrl.edit);
router.put('/:id', animeCtrl.update);




module.exports = router;
