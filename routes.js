const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/sobre", (req, res) => {
  res.render("sobre");
});

router.get("/sobre/:id", (req, res) => {
  const id = req.params.id;
  res.render("sobre", { id });
});

router.get("/contato", (req, res) => {
  res.render("contato");
});

router.get("/servicos", (req, res) => {
  res.render("servicos");
});

module.exports = router;