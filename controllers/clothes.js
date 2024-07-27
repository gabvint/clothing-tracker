
const Clothes = require('../models/clothes.js');

// GET - displaying all clothes information
const index = async (req, res) => {
    const allClothes = await Clothes.find()
    console.log(allClothes.name)

    res.render('clothes/index.ejs', {
        clothes: allClothes
    });
}

// GET - display form for adding new clothes
const newClothes = (req, res) => {
    res.render('clothes/new.ejs')
}

// POST - add new clothes data to database
const addClothes = async (req, res) => {

    if(req.body.isOnSale){
        req.body.isOnSale = true
    } else{
        req.body.isOnSale = false
    }
    await Clothes.create(req.body)

}


module.exports = {
    index,
    new: newClothes,
    addClothes,
}