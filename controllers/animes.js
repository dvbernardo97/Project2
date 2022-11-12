const Anime = require('../models/anime')


module.exports = {
    index,
    new: newAnime,
    create,
    show,
    delete: deleteAnime

}

function index(req, res) {
    Anime.find({}, function (err, animes) {
        res.render('animes/index', { title: 'animes', animes });
    })

}

function newAnime(req, res) {
    res.render('animes/new', { title: 'add' })
}

function create(req, res) {
    console.log(req.body)
    const anime = new Anime(req.body)
    anime.save(function (err) {
        if (err) return res.redirect("/new")
        res.redirect('/animes')
    })

}

function show(req, res) {
    res.render('/animes')
}


function deleteAnime(req, res, next) {
    Anime.find(req.params.id).then(function (anime) {
        const animes = anime.id(req.params.id)
        anime.remove()
        anime.save().then(function () {
            res.redirect('/animes')
        }).catch(function (err) {
            return next(err)
        })
    })
}