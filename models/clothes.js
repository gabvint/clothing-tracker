const mongoose = require('mongoose');

const clothesSchema = new mongoose.Schema({
   

    name: {
    type: String, 
    required: true
   }, 

   color: {
    type: String,
    required: true
   }, 

   materialType: {
    type: String,
    enum: ['Cotton', 'Polyester', 'Wool', 'Silk', 'Velvet', 'Lace', 'Spandex', 'Leather'],
    required: true
   },

   price: {
    type: Number, 
    required: true
   },

   quantity: {
    type: Number, 
    required: true
   },

   isOnSale: {
    type: Boolean,
   }

});

// creating the model
const Clothes = mongoose.model('Clothes', clothesSchema);

module.exports = Clothes
