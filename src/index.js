const express = require('express');
const mongoose = require("mongoose");
require("dotenv").config();
const gameRoutes = require("./routes/gameRoutes");
const cors = require('cors');

const app = express();
const port = process.env.PORT;
app.use(cors());

//mongobd
mongoose
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected"))
    .catch((error) => console.error(error));

//middleware
app.use(express.json());
app.use('/api', gameRoutes);

//rutas
app.get("/", (req, res) => {
    res.send("Videogame API");
});

app.listen(port, () => console.log('Server running on port', port));