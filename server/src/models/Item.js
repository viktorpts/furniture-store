const { model, Schema, Types: { ObjectId } } = require('mongoose');


const itemSchema = new Schema({
    make: { type: String },
    model: { type: String },
    year: {
        type: Number,
        min: [1950, 'Year must be between 1950 and 2050'],
        max: [2050, 'Year must be between 1950 and 2050'],
    },
    description: { type: String },
    price: { type: Number, min: [0.01, 'Price must be a positive number'] },
    img: { type: String },
    material: { type: String },
    _ownerId: { type: ObjectId, ref: 'User' }
});

const Item = model('Item', itemSchema);

module.exports = Item;