
const dotenv = require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const expressLayout = require('express-ejs-layouts')
const productRouter = require('./routes/api/product.route')
const productMvcRouter = require('./routes/mvc/product.router');
const mainRoute = require('./routes/mvc/product.router');
const headerRoute = require('./routes/mvc/header.router');
const questionRoute = require('./routes/mvc/question.router')
const app = express();
const connectDB = require('./configs/database');


//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
const PORT = process.env.PORT || 3000;
app.use('/api/products', productRouter);

// static file
app.use(express.static('public'));

// Templating Engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');


//Home
// app.get('/', (req, res) => {
//     const locals = {
//         title: 'NodeJs',
//         description: 'Free NodeJs CRUD_APP'
//     }
//     res.render('index', locals);
// })

app.use('/', productMvcRouter)
app.use('/', mainRoute)
app.use('/', headerRoute)
app.use('/', questionRoute)

app.get('*', (req, res) => {
    res.status(404).render('404');
})

//CONNECT_DATABASE
connectDB();
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

//const uri = "mongodb+srv://adronghia:NYkDiVlvoWDRFXkM@backenddb.lzjcx.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB";

// mongoose.connect(uri)
//   .then(() => {
//     console.log('Connected to MongoDB');
//     app.listen(PORT, () => {
//       console.log(`Server is running on port ${PORT}`);
//     });
//   })
//   .catch((error) => {
//     console.error('Error connecting to MongoDB:', error);
//   });
