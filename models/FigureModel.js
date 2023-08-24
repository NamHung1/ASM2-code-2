var mongoose = require('mongoose');
var FigureSchema = mongoose.Schema({
    brand: String,
    name: String,
    price: Number,
    quantity: Number,
    image: String
});
const FigureModel = mongoose.model('figure', FigureSchema, 'figure');
module.exports = FigureModel;