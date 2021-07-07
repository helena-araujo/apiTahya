const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
    res.status(200).send({
        title: "apiThaya",
        version: "1.0.0",
        description: "API que facilita a pesquisa e catalogação de alimentos consumidos e calcule suas calorias consumidas de acordo com seus objetivos. Veganos, vegetarianos, pessoas com intolerâncias, alergias e diabetes podem identificar o que vão consumir e o que consumiram.",
        author: "Helena de Araújo"
    });
});

module.exports = router;