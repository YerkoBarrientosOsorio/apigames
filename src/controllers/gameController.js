const gameService = require("../services/gameService");


const getGames = async (req, res) => {
    try {
        const games = await gameService.getGames(req, res);
        console.log("Games: ", games);
        if(games.length==0){
            res.status(404).send("Game not found");
        } else {
            res.send(games);
        }
    } catch (error) {
        console.log(error);
    }
    
};

const postGame = async (req, res) => {
    const game = await gameService.postGame(req, res);
    console.log(game);
    if(!game){
        res.status(403);
    } else {
        res.status(201).send(game);
    }
};

const deleteGame = async (req, res) => {
    const game = await gameService.deleteGame(req, res);
    res.status(200);
};

const getGameByName = async (req, res) => {
    const { name } = req.params;
    const game = await gameService.getGameByName(name);
    console.log(game);
    if(!game){
        res.status(404).send("Game not found");
    } else {
        res.send(game);
    }
    
};

const getGameByDeveloper = async (req, res) => {
    const { developer } = req.params;
    const game = await gameService.getGameByDeveloper(developer);
    console.log(game);
    if(game.length==0){
        res.status(404).send("Game not found 2");
    } else {
        res.send(game);
    }
    
};

const getGameByGenre = async (req, res) => {
    const { genre } = req.params;
    const game = await gameService.getGameByGenre(genre);
    if(game.length==0){
        res.status(404).send("Game not found 2");
    } else {
        res.send(game);
    }
    
};

const getGamesByMode = async (req, res) => {
    const { mode } = req.params;
    const game = await gameService.getGamesByMode(mode);
    if(game.length==0){
        res.status(404).send("Game not found");
    } else {
        res.send(game);
    }
    
};

const deleteGameByName = async (req, res) => {
    const { name } = req.body;
    const game = await gameService.deleteGameByName(name);
    console.log(game);
    
    if(game.deletedCount==0){
        res.status(404).send("Game not found");
    } else {
        res.status(200).send(game);
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
    getGameByDeveloper,
    getGameByGenre,
    getGamesByMode
};

  