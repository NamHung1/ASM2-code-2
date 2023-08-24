var mongoose = require('mongoose');
var BgameSchema = mongoose.Schema({
    brand: String,
    name: String,
    price: Number,
    quantity: Number,
    image: String
});
const BgameModel = mongoose.model('bgame', BgameSchema, 'bgame');
module.exports = BgameModel;