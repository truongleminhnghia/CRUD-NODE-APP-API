const mongoose = require('mongoose')
const Product = require('../../models/product.model')

/**
 * GET /
 * HOMNE
 */
exports.homepage = async (req, res) => {
  const locals = {
    title: "NodeJs",
    description: "Free NodeJs CRUD_APP",
  };
  res.render("index", locals);
};

/**
 * GET /
 * New product form
 */

exports.addProduct = async (req, res) => {
  const locals = {
    title: "Add new product",
    description: "Free NodeJs CRUD_APP",
  };
  res.render("product/addProduct", locals);
};

/**
 * POST /
 * New product
 */
exports.postProduct = async (req, res) => {
    console.log(req.body); 

    const newProduct = new Product({
        name: req.body.name,
        quantity: req.body.quatity,
        price: req.body.price
    });
    
    try {
        await Product.create(newProduct);
        res.redirect('/');
    } catch(error) {
        console.log(error);
    }
};
