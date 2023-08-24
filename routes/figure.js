var express = require('express');
const FigureModel = require('../models/FigureModel');
const BgameModel = require('../models/BgameModel');
var router = express.Router();

router.get('/', async (req, res) => {
    var figures = await FigureModel.find();
    res.render('figure/figureCate', { figures: figures, title: ' Categoey: Figure' });
    // res.send(figures);
});

router.get('/delete/:id', async (req, res) => {
    var id = req.params.id;
    await FigureModel.findByIdAndDelete(id)
        .then(console.log("Delete figure successfully!!"))
        .catch(err => console.log("Delete figure failed!!"));
    res.redirect('/');
    // await FigureModel.findByIdAndDelete(req.params.id);
    // res.redirect('/figure');
});

router.get('/figureAdd', (req, res) => {
    res.render('figure/figureAdd');
});

router.post('/add', async (req, res) => {
    var figure = req.body;
    await FigureModel.create(figure)
        .then(console.log('Add figure successfully!!'))
        .catch(err => console.log(err));
    res.redirect('/')
});

router.get('/figureEdit/:id', async (req, res) => {
    var id = req.params.id;
    var figure = await FigureModel.findById(id);
    res.render('figure/figureEdit', { figure: figure });
});

router.post('/edit/:id', async (req, res) => {
    await FigureModel.findByIdAndUpdate(req.params.id, req.body)
        .then(console.log('Edit figure successfully!!'))
        .catch(err => console.log(err));
    res.redirect('/');
});

router.get('/figureDetail/:id', async (req, res) => {
    var id = req.params.id;
    var figure = await FigureModel.findById(id);
    //render ra file "views/mobile/detail.hbs"
    res.render('figure/figureDetail', { figure : figure, title: 'Product detail' });
});

router.post('/search', async (req, res) => {
    var keyword = req.body.keyword;
    var figures = await FigureModel.find({ name: new RegExp(keyword, "i") })
    var bgames = await BgameModel.find({ name: new RegExp(keyword, "i") })
    res.render('index', { figures: figures, bgames: bgames });
});

module.exports = router;
