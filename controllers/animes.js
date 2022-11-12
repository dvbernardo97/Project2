const Anime = require('../models/anime')


module.exports = {
    index,
    new: newAnime,
    create,
    show,
    delete: deleteAnime,
    edit,
    update
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

function deleteAnime(req, res) {
    Anime.findOneAndDelete(
        req.params.id, function (err) {
            res.redirect("/")
        }
    )
}

function edit(req, res) {
    Anime.findOne({'animes._id': req.params.id}).then(function(anime) {
        res.render('animes/edit', { title: 'Anime Update', anime })
      });
    }

function update(req, res) {
    Anime.findOne({'_id': req.params.id})
    .then(function(anime) {
      anime.name = req.body.name
      anime.save(function(err) {
        if (err) return res.redirect('/animes');
        res.redirect('/animes');
      });
  })
  }