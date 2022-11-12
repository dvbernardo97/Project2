const Anime = require('../models/anime')

module.exports = {
    create,
}


function create(req, res) {
    Anime.findById(req.params.id, function (err, anime) {
        console.log(anime)
        console.log(req.body.comment)
        console.log(req.body)
        anime.comment.push(req.body.comment)
        anime.save(function (err) {
            res.redirect(`/animes/${anime.id}`)
        })
    })
}