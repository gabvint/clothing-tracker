
const Clothes = require('../models/clothes.js');

// GET - displaying all clothes information
const index = async (req, res) => {
    const allClothes = await Clothes.find()
    console.log(allClothes.name)

    res.render('clothes/index.ejs', {
        clothes: allClothes
    });
}

// GET - renders show page for individual clothes information (edit and delete)
const show = async (req, res) => {
    const foundClothes = await Clothes.findById(req.params.clothesId); 
    res.render('clothes/show.ejs', {
        clothes: foundClothes,
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
    res.redirect('/clothes')
    await Clothes.create(req.body)

}


module.exports = {
    index,
    show, 
    new: newClothes,
    addClothes,
}