const Anime = require('../models/anime')




module.exports = {
    create,
}

function create(req, res) {
    res.render("animes/new")
}