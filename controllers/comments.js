const Anime = require('../models/anime')

module.exports = {
    create,
}


function create(req, res) {
    Anime.findById(req.params.id, function (err, anime) {
        console.log(anime)
        console.log(req.body)
        anime.comments.push(req.body)
        anime.save(function (err) {
            res.redirect(`/animes/${ anime._id }`);
        });
    })
}