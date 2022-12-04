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
    }
    
};


const deleteGame = async (req, res) => {
    try {
        const { id } = req.params;
        return gameSchema.remove({ _id: id })
    } catch (error) {
        console.log(error);
    }
};

const getGameByName = async (gameName) => {
    return await gameSchema.findOne({name:gameName});
};

const getGameByDeveloper = async (gameDeveloper) => {
    return await gameSchema.findOne({developer:gameDeveloper});
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
    return gameSchema.updateOne({ _id: id },{ $set: { name, developer, genre, mode } });
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