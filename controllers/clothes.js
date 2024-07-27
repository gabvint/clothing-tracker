
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
const newItem = (req, res) => {
    res.render('clothes/new.ejs')
}

// POST - add new clothes data to database
const addItem = async (req, res) => {

    if(req.body.isOnSale){
        req.body.isOnSale = true
    } else{
        req.body.isOnSale = false
    }
    res.redirect('/clothes')
    await Clothes.create(req.body)

}

const removeItem = async (req, res) => {
    await Clothes.findByIdAndDelete(req.params.clothesId)
    res.redirect('/clothes')
}

const editItem = async (req, res) => {
    const foundClothes = await Clothes.findById(req.params.clothesId)
    res.render('clothes/edit.ejs', {
        clothes: foundClothes,
    });
}

const updateItem = async (req, res) => {
    if(req.body.isOnSale){
        req.body.isOnSale = true
    } else{
        req.body.isOnSale = false
    }
    await Clothes.findByIdAndUpdate(req.params.clothesId, req.body)
    res.redirect(`/clothes/${req.params.clothesId}`)
}


module.exports = {
    index,
    new: newItem,
    show, 
    addItem,
    removeItem,
    editItem, 
    updateItem,

}