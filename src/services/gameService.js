const gameSchema = require("../models/gameModel");


const getGames = async (req, res) => {
    try {
        return await gameSchema.find();
    } catch (error) {
        console.log(error);
    }
    
};



const postGame = async (req, res) => {
    try {
        const game = gameSchema(req.body);
        console.log("Game: ", game);
        return await game.save();
    } catch (error) {
        console.log(error);
        res.status(403).send("Game already exists");
    }
    
};


const deleteGame = async (req, res) => {
    try {
        const { id } = req.params;
        return gameSchema.remove({ _id: id })
    } catch (error) {
        console.log(error);
        res.status(404).send("Game not found");
    }
};

const getGameByName = async (gameName) => {
    try {
        return await gameSchema.findOne({name:gameName});
    } catch (error) {
        console.log(error);
    }
    
};

const getGameByDeveloper = async (gameDeveloper) => {
    try {
        return await gameSchema.find({developer:gameDeveloper});
    } catch (error) {
        console.log(error);
    }
    
};

const getGameByGenre = async (gameGenre) => {
    try {
        return await gameSchema.find({genre:gameGenre});
    } catch (error) {
        console.log(error); 
    }
    
};

const getGamesByMode = async (gameMode) => {
    try {
        return await gameSchema.find({mode:gameMode});
    } catch (error) {
        console.log(error);
    }
    
};



const deleteGameByName = async (gameName) => {
    try {
        return gameSchema.deleteOne({name:gameName})
    } catch (error) {
        console.log(error);
    }
};

const putGame = async (req, res) => {
    const { id } = req.params;
    const { name, developer, genre, mode } = req.body;
    try{
        return gameSchema.updateOne({ _id: id },{ $set: { name, developer, genre, mode } });
    } catch (error) {
        console.log(error);
    }
    
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