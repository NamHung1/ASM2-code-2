var express = require('express');
const FigureModel = require('../models/FigureModel');
const BgameModel = require('../models/BgameModel');
var router = express.Router();

/* GET home page. */
router.get('/', async (req, res) => {
  var figures = await FigureModel.find();
  var bgames = await BgameModel.find();
  res.render('index', { figures, bgames, title: 'Home' });
});

module.exports = router;
