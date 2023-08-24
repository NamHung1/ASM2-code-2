var express = require('express');
const BgameModel = require('../models/BgameModel');
var router = express.Router();

router.get('/', async (req, res) => {
    var bgames = await BgameModel.find();
    res.render('bgame/bgameCate', { bgames : bgames, title: 'Categoey: Board Games' });
    // res.send(bgames)
});

router.get('/delete/:id', async (req, res) => {
    await BgameModel.findByIdAndDelete(req.params.id);
    res.redirect('/');
})

router.get('/bgameAdd', (req, res) => {
    res.render('bgame/bgameAdd');
});

router.post('/add', async (req, res) => {
    var bgame = req.body;
    await BgameModel.create(bgame)
        .then(console.log('Add board game successfully!!'))
        .catch(err => console.log(err));
    res.redirect('/')
});

router.get('/bgameEdit/:id', async (req, res) => {
    var id = req.params.id;
    var bgame = await BgameModel.findById(id);
    res.render('bgame/bgameEdit', { bgame: bgame });
});

router.post('/edit/:id', async (req, res) => {
    await BgameModel.findByIdAndUpdate(req.params.id, req.body)
        .then(console.log('Edit board game successfully!!'))
        .catch(err => console.log(err));
    res.redirect('/');
});

router.get('/bgameDetail/:id', async (req, res) => {
    var id = req.params.id;
    var bgame = await BgameModel.findById(id);
    //render ra file "views/mobile/detail.hbs"
    res.render('bgame/bgameDetail', { bgame : bgame, title: 'Product detail' });
});

// router.post('/search', async (req, res) => {
//     var keyword = req.body.keyword;
//     var bgames = await BgameModel.find({ name: new RegExp(keyword, "i") })
//     res.render('bgame/bgameCate', { bgames: bgames });
// })

module.exports = router;