const gameService = require("../services/gameService");


const getGames = async (req, res) => {
    try {
        const games = await gameService.getGames(req, res);
        console.log("Games: ", games);
        res.send(games);
    } catch (error) {
        console.log(error);
    }
    
};

const postGame = async (req, res) => {
    const game = await gameService.postGame(req, res);
    console.log(game);
    res.status(201).send(game);
};

const deleteGame = async (req, res) => {
    const game = await gameService.deleteGame(req, res);
    res.status(200);
};

const getGameByName = async (req, res) => {
    const { name } = req.body;
    const game = await gameService.getGameByName(name);
    if(!game){
        res.status(404).send("Game not found");
    } else {
        res.send(game);
    }
    
};

const getGameByDeveloper = async (req, res) => {
    const { developer } = req.body;
    const game = await gameService.getGameByDeveloper(developer);
    if(!game){
        res.status(404).send("Game not found");
    } else {
        res.send(game);
    }
    
};

const deleteGameByName = async (req, res) => {
    const { name } = req.body;
    const game = await gameService.deleteGameByName(name);
    
    if(!game){
        res.status(404).send("Game not found");
    } else {
        res.status(200).send("game");
    }
    
};

const putGame = async (req, res) => {
    const game = await gameService.putGame(req, res);
    console.log("PUT: ",game);
    res.send(game);
};


module.exports = {
    getGames,
    postGame,
    deleteGame,
    getGameByName,
    putGame,
    deleteGameByName,
    getGameByDeveloper
};

  