const express = require ("express");
const gameController = require("../controllers/gameController");
const router = express.Router();

router.get("/games", (req, res) => {
    gameController.getGames(req, res);
});

router.post("/game", (req, res) => {
    gameController.postGame(req, res);
});

router.delete("/game/:id", (req, res) => {
    gameController.deleteGame(req, res);
});

router.delete("/game/", (req, res) => {
    gameController.deleteGameByName(req, res);
});

router.get("/gamebyname/:name", (req, res) => {
    gameController.getGameByName(req, res);
});

router.get("/gamesbydev/:developer", (req, res) => {
    gameController.getGameByDeveloper(req, res);
});

router.get("/gamesbygenre/:genre", (req, res) => {
    gameController.getGameByGenre(req, res);
});

router.get("/gamesbymode/:mode", (req, res) => {
    gameController.getGamesByMode(req, res);
});

router.put("/game/:id", (req, res) => {
    gameController.putGame(req, res);
});



module.exports = router;