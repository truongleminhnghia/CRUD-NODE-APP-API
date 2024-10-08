const mongoose = require("mongoose");
const Question = require("../../models/question.model");

exports.homepage = async (req, res) => {
  const locals = {
    title: "NodeJs",
    description: "Free NodeJs CRUD_APP",
  };
  res.render("index", locals);
};

exports.questionpage = async (req, res) => {
  try {
    const questions = await Question.find();
    const locals = {
      title: "Question",
      description: "Danh sách câu hỏi",
      questions,
    };
    res.render("questions/showQuestion", locals);
  } catch (erroe) {
    console.log(erroe);
  }
};

exports.quizzpage = async (req, res) => {
  const locals = {
    title: "NodeJs",
    description: "Free NodeJs CRUD_APP",
  };
  res.render("quizzs/hi", locals);
};
