// import modules 

const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const morgan = require('morgan');
const path = require('path');


const app = express();

// connect to MongoDB server
mongoose.connect(process.env.MONGO_URI);

// log connection status to the terminal on start
mongoose.connection.on('connected', () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}`)
})


// import the fruit model 
const Clothes = require('./models/clothes.js');

// import controller 
const clothesCntrl = require('./controllers/clothes.js');


// middlware
app.use(express.urlencoded({ extended: false}));
app.use(methodOverride("_method"));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, "public")));


app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.get('/clothes', clothesCntrl.index);

app.get('/clothes/new', clothesCntrl.new);

app.get('/clothes/:clothesId', clothesCntrl.show);

app.post('/clothes', clothesCntrl.addItem);

app.delete('/clothes/:clothesId', clothesCntrl.removeItem);

app.get('/clothes/:clothesId/edit', clothesCntrl.editItem)

app.put('/clothes/:clothesId', clothesCntrl.updateItem)


app.listen(3000, () => {
    console.log('Listening on port 3000');
})