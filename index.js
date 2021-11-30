const express = require("express");
const cors = require("cors");
const repoContext = require("./repository/repository-wrapper");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.listen(3000);

app.get('/api/songs', (req, res) => {
    const allSongs = repoContext.songs.findAllSongs();
    return res.send(allSongs);
});

app.get('/api/songs/:id', (req, res) => {
    const id = req.params.id;
    const song = repoContext.songs.findSongById(id);
    return res.send(song);
});