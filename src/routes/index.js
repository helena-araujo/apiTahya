const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
    res.status(200).send({
        title: "apiTahya",
        version: "1.0.0",
        description: "API que facilita a pesquisa e catalogação de alimentos consumidos e calcula suas calorias consumidas de acordo com os objetivos da usuária. Veganas, vegetarianas, pessoas com intolerâncias, alergias e diabetes podem identificar o que vão consumir e o que consumiram.",
        author: "Helena de Araújo"
    });
});

module.exports = router;