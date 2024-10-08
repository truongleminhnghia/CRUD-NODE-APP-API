const mongoose = require("mongoose");

exports.homepage = async (req, res) => {
  const locals = {
    title: "NodeJs",
    description: "Free NodeJs CRUD_APP",
  };
  res.render("index", locals);
};

exports.questionpage = async (req, res) => {


  const locals = {
    title: "NodeJs",
    description: "Free NodeJs CRUD_APP",
  };
  res.render("questions/showQuestion", locals);
};

exports.quizzpage = async (req, res) => {
    const locals = {
      title: "NodeJs",
      description: "Free NodeJs CRUD_APP",
    };
    res.render("quizzs/hi", locals);
  };
